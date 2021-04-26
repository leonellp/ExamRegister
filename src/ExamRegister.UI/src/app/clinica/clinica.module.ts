import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicaRoutingModule } from './clinica-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClinicaComponent } from './form-clinica/form-clinica.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [FormClinicaComponent]
})
export class ClinicaModule { }
