import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';

@Injectable()
export class AuthService {

  get usuarioAutenticado(): boolean {
    return this.usuario != null;
  }

  get usuario(): UsuarioDTO | null {
    return JSON.parse(sessionStorage.getItem("usuario") || "null") as UsuarioDTO | null;

  }

  set usuario(usuario: UsuarioDTO | null) {
    if (usuario == null) {
      sessionStorage.removeItem("usuario");
      return;
    }

    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioEmitter = new EventEmitter<UsuarioDTO>();

  constructor(private router: Router) { }

  fazerLogin(usuario: UsuarioDTO) {
    
    if (usuario.user === 'admin' &&
      usuario.password === 'admin') {
      usuario.nome = "nome do usuario";
        
      this.usuario = usuario;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.fazerLogout();
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
