import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamesRoutingModule } from './exame-routing.module';
import { ExameMedRespDiagComponent } from './exame-med-resp-diag/exame-med-resp-diag.component';
import { FormExameComponent } from './form-exame/form-exame.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ExamesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [ExameMedRespDiagComponent, FormExameComponent]
})
export class ExameModule { }
