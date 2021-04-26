import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoDeMedicoRoutingModule } from './grupo-de-medico-routing.module';
import { GrupoMedicoComponent } from './grupo-medico/grupo-medico.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGrupoDeMedicoComponent } from './form-grupo-de-medico/form-grupo-de-medico.component';


@NgModule({
  declarations: [GrupoMedicoComponent, FormGrupoDeMedicoComponent],
  imports: [
    CommonModule,
    GrupoDeMedicoRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
  ]
})
export class GrupoDeMedicoModule { }
