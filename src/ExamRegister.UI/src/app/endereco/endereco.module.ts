import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesComponent } from './cidades/cidades.component';
import { EstadosComponent } from './estados/estados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CidadesComponent, EstadosComponent]
})
export class EnderecoModule { }
