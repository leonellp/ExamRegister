import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { MedicoComponent } from './medico.component';

const routes: Routes = [
  { path: '', component: MedicoComponent },

  { path: 'novo', component: FormMedicoComponent },

  { path: 'editar/:id', component: FormMedicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MedicoRoutingModule { }
