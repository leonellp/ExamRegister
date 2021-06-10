using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using System;
using System.Linq;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using ExamRegister.Business.Abstractions.DTO;

namespace ExamRegister.Business {
    public class UsuarioService : IUsuarioService {
        private readonly IUsuarioRepository repository;
        private IMapper mapper;

        public UsuarioService(IUsuarioRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idusuario) {
            repository.Delete(Idusuario);
        }

        public UsuarioDTO GetById(Guid Idusuario) {
            return mapper.Map<UsuarioDTO>(repository.GetById(Idusuario));
        }

        public void Insert(UsuarioInsertDTO usuario) {


            var user = mapper.Map<usuario>(usuario);

            user.idusuario = Guid.NewGuid();

            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create()) {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: usuario.password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            user.password_hash = hashed;
            user.password_salt = Convert.ToBase64String(salt);

            repository.Insert(user);
        }

        public paginacao<UsuarioDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var usuarios = repository.List();
            if (soinativos == true) {
                usuarios = usuarios.Where(a => a.inativo != null);
            } else {
                usuarios = usuarios.Where(a => a.inativo == null);
            }
            if (pesquisa != null) {
                usuarios = usuarios.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = usuarios.Count();
            }

            if (skip < 0)
                skip = 0;
            usuarios = usuarios.OrderBy(a => a.nome);
            usuarios = usuarios.Skip(skip).Take(top);


            return new paginacao<UsuarioDTO>() {
                values = usuarios.ProjectTo<UsuarioDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idusuario, UsuarioDTO usuarioUpdate) {

            var user = mapper.Map<usuario>(usuarioUpdate);

            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create()) {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: usuarioUpdate.password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            user.password_hash = hashed;
            user.password_salt = Convert.ToBase64String(salt);

            repository.Update(Idusuario, user);
        }
    }
}
