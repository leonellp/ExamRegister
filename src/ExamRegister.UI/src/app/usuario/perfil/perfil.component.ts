import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { FormValidations } from 'src/app/shared/form-validations';
import { UsuarioService } from 'src/app/shared/Services/usuario.service';
import { Location } from '@angular/common';
import { UsuarioDTO } from 'src/app/shared/DTOs/usuario-dto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  usuario!: UsuarioDTO;
  formulario!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario') || '{}');
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idusuario: [null],
      nome: [null],
      user: [null],
      password: [null],
      confirmaPassword: [null],
      idexterno: [null],
      inativo: [null],
    });

    this.formulario.patchValue(Object.assign({}, this.usuario));
  }

  onEdit() {
    this.router.navigate(['usuario/editar', this.usuario.idusuario]);
  }

  onBack() {
    this.location.back();
  }
}
