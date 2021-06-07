import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  constructor(
    public nav: AppService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });

    sessionStorage.removeItem('clinica');
    sessionStorage.removeItem('diagnostico');
    sessionStorage.removeItem('exame');
    sessionStorage.removeItem('categoria');
    sessionStorage.removeItem('medicoSalvo');
    sessionStorage.removeItem('orgao');
    sessionStorage.removeItem('paciente');
    sessionStorage.removeItem('peca');
    sessionStorage.removeItem('reuniao');
    sessionStorage.removeItem('novoUsuario');
    sessionStorage.removeItem('informacao');
    sessionStorage.removeItem('grupo');
  }

  submit() {
    this.authService.fazerLogin(this.formulario);
  }
}
