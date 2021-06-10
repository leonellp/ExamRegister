using AutoMapper;
using ExamRegister.Business.Abstractions.Interfaces;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace ExamRegister.Business {
    public class AuthenticationService : IAuthenticationService {
        private readonly IUsuarioRepository repository;
        private IMapper mapper;
        public IConfiguration Configuration { get; }

        public AuthenticationService(IUsuarioRepository repository, IMapper mapper, IConfiguration Configuration) {
            this.repository = repository;
            this.mapper = mapper;
            this.Configuration = Configuration;
        }

        public AuthorizationSaidaDTO Authenticate(AuthorizationEntradaDTO usuario) {
            if (usuario.grant_type == "password") {
                var _usuario = repository.List().Where(a => a.user == usuario.username && a.inativo == null).FirstOrDefault();

                if (_usuario == null)
                    return null;

                string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: usuario.password,
                    salt: Convert.FromBase64String(_usuario.password_salt),
                    prf: KeyDerivationPrf.HMACSHA1,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8
                    ));

                if (hashed != _usuario.password_hash) {
                    return null;
                }

                JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();

                var expires = DateTime.Now.AddHours(2);

                SecurityToken token = handler.CreateJwtSecurityToken(
                        issuer: "API",
                        audience: "Angular",
                        expires: expires,
                        subject: new ClaimsIdentity(new[] {
                            new Claim(ClaimTypes.NameIdentifier, _usuario.idusuario.ToString()),
                            new Claim(ClaimTypes.Name, _usuario.user),
                            new Claim(ClaimTypes.GivenName, _usuario.nome),
                        }),
                        issuedAt: DateTime.Now,
                        notBefore: DateTime.Now,
                        signingCredentials:
                        new SigningCredentials(
                            new SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(Configuration.GetValue<string>("JWT:Secret"))),
                            "HS256"
                        )
                  );

                string access_token = handler.WriteToken(token);
                string refresh_token = handler.WriteToken(token);

                return new AuthorizationSaidaDTO() {
                    token_type = "bearer",
                    access_token = access_token,
                    expires_in = Convert.ToInt32((expires - DateTime.Now).TotalSeconds) - 1,
                    refresh_token = refresh_token,                    
                };


            } else
                return null;
        }
    }
}
