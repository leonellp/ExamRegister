using AutoMapper;
using ExamRegister.Business.Abstractions.Interfaces;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class AuthenticationService : IAuthenticationService {
        private readonly IUsuarioRepository repository;
        private IMapper mapper;

        public AuthenticationService(IUsuarioRepository repository, IMapper mapper) {
            this.repository = repository;
            this.mapper = mapper;
        }

        public UsuarioDTO Login(UsuarioDTO usuario) {
            var _usuario = repository.List().Where(a => a.user == usuario.user).FirstOrDefault();
            UsuarioDTO autenticacao = new UsuarioDTO();

            if (_usuario != null) {
                string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: usuario.password,
                    salt: Convert.FromBase64String(_usuario.password_salt),
                    prf: KeyDerivationPrf.HMACSHA1,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8
                    ));

                if (hashed == _usuario.password_hash) {
                    return mapper.Map<UsuarioDTO>(_usuario);
                }
            }

            return null;
        }
    }
}
