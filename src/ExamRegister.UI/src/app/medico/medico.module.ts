import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoClinicaComponent } from './medico-clinica/medico-clinica.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    MedicoRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [MedicoClinicaComponent, FormMedicoComponent]
})
export class MedicoModule { }
