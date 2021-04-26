import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGrupoDeMedicoComponent } from './form-grupo-de-medico/form-grupo-de-medico.component';
import { GrupoDeMedicoComponent } from './grupo-de-medico.component';

const routes: Routes = [
  { path: '', component: GrupoDeMedicoComponent },

  { path: 'novo', component: FormGrupoDeMedicoComponent },

  { path: 'editar/:id', component: FormGrupoDeMedicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoDeMedicoRoutingModule { }
