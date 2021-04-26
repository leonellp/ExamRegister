import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicaComponent } from './clinica.component';
import { FormClinicaComponent } from './form-clinica/form-clinica.component';

const routes: Routes = [
  { path: '', component: ClinicaComponent },

  { path: 'nova', component: FormClinicaComponent },

  { path: 'editar/:id', component: FormClinicaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClinicaRoutingModule { }
