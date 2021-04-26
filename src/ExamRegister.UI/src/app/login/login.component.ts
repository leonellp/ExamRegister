import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioDTO = new UsuarioDTO();

  constructor(
    public nav: AppService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
