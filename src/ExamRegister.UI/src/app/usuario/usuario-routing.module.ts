import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'novo', component: NovoUsuarioComponent },
  { path: 'editar/:id', component: NovoUsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsuarioRoutingModule {}
