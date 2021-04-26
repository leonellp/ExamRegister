import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticoComponent } from './diagnostico.component';
import { FormDiagnosticoComponent } from './form-diagnostico/form-diagnostico.component';

const routes: Routes = [
  { path: '', component: DiagnosticoComponent},
  { path: 'novo', component: FormDiagnosticoComponent},
  { path: 'editar/:id', component: FormDiagnosticoComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DiagnosticoRoutingModule { }
