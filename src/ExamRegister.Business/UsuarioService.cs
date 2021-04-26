﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using System;
using System.Linq;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;

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


            /* string hashed2 = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: usuario.Password,
                salt: Convert.FromBase64String(user.PasswordSalt),
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            if(hashed2 != hashed) {
                throw new Exception("hashed n bateu");
            }*/

            
            repository.Insert(user);
        }

        public IQueryable<UsuarioDTO> List(bool soinativos) {
            var usuarios = repository.List();
            if (soinativos) {
                usuarios = usuarios.Where(a => a.inativo != null);
            } else {
                usuarios = usuarios.Where(a => a.inativo == null);
            }

            return usuarios.ProjectTo<UsuarioDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idusuario, UsuarioDTO usuarioNew) {

            var user = mapper.Map<usuario>(usuarioNew);

            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create()) {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: usuarioNew.password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            user.password_hash = hashed;
            user.password_salt = Convert.ToBase64String(salt);

            repository.Update(Idusuario, mapper.Map<usuario>(usuarioNew));
        }
    }
}