import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ExamesRoutingModule } from './exame-routing.module';
import { ExameMedRespDiagComponent } from './exame-med-resp-diag/exame-med-resp-diag.component';
import { FormExameComponent } from './form-exame/form-exame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ExamePacienteComponent } from './exame-paciente/exame-paciente.component';
import { ExameOrgaoComponent } from './exame-orgao/exame-orgao.component';
import { ExamePecaComponent } from './exame-peca/exame-peca.component';
import { ExameGrupodemedicoComponent } from './exame-grupodemedico/exame-grupodemedico.component';
import { ExameMedicosolicComponent } from './exame-medicosolic/exame-medicosolic.component';
import { ExameMedicorespComponent } from './exame-medicoresp/exame-medicoresp.component';
import { ExameClinicaComponent } from './exame-clinica/exame-clinica.component';
import { ExameReuniaoComponent } from './exame-reuniao/exame-reuniao.component';
import { CategoriaexameComponent } from './categoriaexame/categoriaexame.component';
import { ExameDiagnosticoComponent } from './exame-diagnostico/exame-diagnostico.component';
import { ExameCategoriaComponent } from './exame-categoria/exame-categoria.component';
import { ImagemComponent } from './imagem/imagem.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

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
    NgxImageZoomModule
  ],
  declarations: [
    ExameMedRespDiagComponent,
    FormExameComponent,
    ExamePacienteComponent,
    ExameOrgaoComponent,
    ExamePecaComponent,
    ExameGrupodemedicoComponent,
    ExameMedicosolicComponent,
    ExameMedicorespComponent,
    ExameClinicaComponent,
    ExameReuniaoComponent,
    CategoriaexameComponent,
    ExameDiagnosticoComponent,
    ExameCategoriaComponent, ImagemComponent
  ],

})
export class ExameModule { }
