import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

const routes: Routes = [
  { path: '', component: CategoriaComponent },

  { path: 'novo', component: FormCategoriaComponent},

  { path: 'editar/:id', component: FormCategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoriaRoutingModule { }
