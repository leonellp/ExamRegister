import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPecaComponent } from './form-peca/form-peca.component';
import { PecaComponent } from './peca.component';

const routes: Routes = [
  { path: '', component: PecaComponent },
  { path: 'novo', component: FormPecaComponent },
  { path: 'editar/:id', component: FormPecaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PecaRoutingModule { }
