import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOrgaoComponent } from './form-orgao/form-orgao.component';
import { OrgaoComponent } from './orgao.component';

const routes: Routes = [
  { path: '', component: OrgaoComponent },
  { path: 'novo', component: FormOrgaoComponent },
  { path: 'editar/:id', component: FormOrgaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrgaoRoutingModule { }
