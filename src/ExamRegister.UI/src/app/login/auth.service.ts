import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';
import { LoginDTO } from '../shared/DTOs/login-dto';
import { LoginService } from '../shared/Services/login.service';
import { FormGroup } from '@angular/forms';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { UsuarioService } from '../shared/Services/usuario.service';

@Injectable()
export class AuthService {
  autenticacao: string = '';

  get usuarioAutenticado(): boolean {
    return this.usuario != null;
  }

  get usuario(): UsuarioDTO | null {
    return JSON.parse(
      sessionStorage.getItem('usuario') || 'null'
    ) as UsuarioDTO | null;
  }

  set usuario(usuario: UsuarioDTO | null) {
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
    private usuarioService: UsuarioService,
    private alertService: AlertModalService
  ) {}

  fazerLogin(usuario: FormGroup) {
    let login: LoginDTO = Object.assign({}, usuario.value);

    if (usuario.valid) {
      this.loginService.login(login).subscribe((autenticacao) => {
        this.autenticacao = autenticacao.toString();

        if (autenticacao == 'negado') {
          this.alertService.showAlertDanger('Usuário ou senha incorretos!');
        } else {
          this.usuarioService
            .loadByID(this.autenticacao)
            .subscribe((usuario) => (this.usuario = usuario));
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/']);
        }
      });
    } else {
      this.fazerLogout();
      usuario.markAllAsTouched();
    }
  }

  fazerLogout() {
    this.usuario = null;

    this.mostrarMenuEmitter.emit(false);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
