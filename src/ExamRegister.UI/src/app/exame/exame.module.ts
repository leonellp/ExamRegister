import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamesRoutingModule } from './exame-routing.module';
import { ExameMedRespDiagComponent } from './exame-med-resp-diag/exame-med-resp-diag.component';

@NgModule({
  imports: [
    CommonModule,
    ExamesRoutingModule
  ],
  declarations: [ExameMedRespDiagComponent]
})
export class ExameModule { }
