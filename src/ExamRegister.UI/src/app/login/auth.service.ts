import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';
import { LoginDTO } from '../shared/DTOs/login-dto';
import { LoginService } from '../shared/Services/login.service';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { UsuarioService } from '../shared/Services/usuario.service';
import { AuthorizationEntradaDTO } from '../shared/DTOs/authorizationentrada-dto';
import { UsuarioAutenticadoDTO } from '../shared/DTOs/usuarioautenticado-dto';
import { Base64 } from 'js-base64';

@Injectable()
export class AuthService {
  get usuarioAutenticado(): boolean {
    return this.usuario != null;
  }

  get usuario(): UsuarioAutenticadoDTO | null {
    return JSON.parse(
      sessionStorage.getItem('usuario') || 'null'
    ) as UsuarioAutenticadoDTO | null;
  }

  set usuario(usuario: UsuarioAutenticadoDTO | null) {
    if (usuario == null) {
      sessionStorage.removeItem('usuario');
      return;
    }

    sessionStorage.setItem('usuario', JSON.stringify(usuario));
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioEmitter = new EventEmitter<UsuarioDTO>();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertModalService
  ) {}

  fazerLogin(usuario: LoginDTO) {
    this.loginService
      .login({
        grant_type: 'password',
        client_id: 'angular.ui',
        username: usuario.user,
        password: usuario.password,
      } as AuthorizationEntradaDTO)
      .subscribe((autenticacao) => {
        sessionStorage.setItem('autenticacao', JSON.stringify(autenticacao));

        if (autenticacao == null) {
          this.alertService.showAlertDanger('Usuário ou senha incorretos!');
          return;
        }

        this.router.navigate(['/']);
        this.mostrarMenuEmitter.emit(true);

        let _usuario: UsuarioAutenticadoDTO = JSON.parse(
          Base64.decode(autenticacao.access_token.split('.', 3)[1])
        );

        this.usuario = _usuario;
      });
  }

  fazerLogout() {
    this.usuario = null;
    this.mostrarMenuEmitter.emit(false);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
