﻿using ExamRegister.WebApi.Abstractions.DTO;

namespace ExamRegister.Business.Abstractions.Interfaces {
    public interface IAuthenticationService {
        AuthorizationSaidaDTO Authenticate(AuthorizationEntradaDTO usuario);
    }
}
