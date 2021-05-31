import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExameComponent } from './exame.component';
import { FormExameComponent } from './form-exame/form-exame.component';
import { ImagemComponent } from './imagem/imagem.component';

const routes: Routes = [
  { path: '', component: ExameComponent },

  { path: 'editar/:id', component: FormExameComponent },

  { path: 'visualizar/:id', component: ImagemComponent},

  { path: 'novo', component: FormExameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamesRoutingModule { }
