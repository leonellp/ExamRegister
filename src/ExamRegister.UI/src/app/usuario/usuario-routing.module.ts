import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioComponent } from './usuario.component';


const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'novo', component: NovoUsuarioComponent },
  { path: 'editar/:id', component: NovoUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsuarioRoutingModule { }
