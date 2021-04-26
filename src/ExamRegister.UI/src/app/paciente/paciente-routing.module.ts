import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { FormInformacaoComponent } from './informacao/form-informacao/form-informacao.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { PacienteComponent } from './paciente.component';

const routes: Routes = [
  { path: '', component: PacienteComponent },

  { path: 'editar/:id', component: FormPacienteComponent },

  { path: 'novo', component: FormPacienteComponent },

  { path: 'historico', component: HistoricoPacienteComponent },

  { path: 'informacao', component: InformacaoComponent },

  { path: 'informacao/novo', component: FormInformacaoComponent },

  { path: 'informacao/editar/:id', component: FormInformacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PacienteRoutingModule { }
