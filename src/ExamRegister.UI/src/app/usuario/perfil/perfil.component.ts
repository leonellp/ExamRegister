import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UsuarioService } from 'src/app/shared/Services/usuario.service';
import { Location } from '@angular/common';
import { UsuarioDTO } from 'src/app/shared/DTOs/usuario-dto';
import { UsuarioAutenticadoDTO } from 'src/app/shared/DTOs/usuarioautenticado-dto';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  usuarioAutenticado!: UsuarioAutenticadoDTO;
  usuario!: UsuarioDTO;

  constructor(
    private router: Router,
    private location: Location,
    private usuarioService: UsuarioService
  ) {
    this.usuarioAutenticado = JSON.parse(
      sessionStorage.getItem('usuario') || '{}'
    );

    this.usuarioService
      .loadByID(this.usuarioAutenticado.nameid)
      .subscribe((usuario) => (this.usuario = usuario));
  }

  ngOnInit(): void {}

  onEdit() {
    this.router.navigate(['usuario/editar', this.usuario.idusuario]);
  }

  onBack() {
    this.location.back();
  }
}
