import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormDiagnosticoComponent } from './form-diagnostico/form-diagnostico.component';
import { DiagnosticoRoutingModule } from './diagnostico-routing.module';
import { DiagnosticoComponent } from './diagnostico.component';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormDiagnosticoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DiagnosticoRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
  ]
})
export class DiagnosticoModule { }
