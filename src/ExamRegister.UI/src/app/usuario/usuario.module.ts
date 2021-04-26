import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NovoUsuarioComponent]
})
export class UsuarioModule { }
