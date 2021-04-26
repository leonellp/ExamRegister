import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReuniaoComponent } from './form-reuniao/form-reuniao.component';
import { ReuniaoComponent } from './reuniao.component';

const routes: Routes = [
  { path: '', component: ReuniaoComponent },
  { path: 'novo', component: FormReuniaoComponent },
  { path: 'editar/:id', component: FormReuniaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReuniaoRoutingModule { }
