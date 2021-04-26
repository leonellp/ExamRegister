import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteInformacaoComponent } from './paciente-informacao/paciente-informacao.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormInformacaoComponent } from './informacao/form-informacao/form-informacao.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    PacienteRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [
    PacienteInformacaoComponent, 
    FormInformacaoComponent, 
    HistoricoPacienteComponent, 
    InformacaoComponent, 
    FormPacienteComponent,
  ]
})
export class PacienteModule { }
