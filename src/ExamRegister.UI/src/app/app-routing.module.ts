import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'categoria',
        loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'clinica',
        loadChildren: () => import('./clinica/clinica.module').then(m => m.ClinicaModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'exame',
        loadChildren: () => import('./exame/exame.module').then(m => m.ExameModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'medico',
        loadChildren: () => import('./medico/medico.module').then(m => m.MedicoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'orgao',
        loadChildren: () => import('./orgao/orgao.module').then(m => m.OrgaoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'paciente',
        loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'peca',
        loadChildren: () => import('./peca/peca.module').then(m => m.PecaModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'reuniao',
        loadChildren: () => import('./reuniao/reuniao.module').then(m => m.ReuniaoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'diagnostico',
        loadChildren: () => import('./diagnostico/diagnostico.module').then(m => m.DiagnosticoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: 'grupodemedico',
        loadChildren: () => import('./grupo-de-medico/grupo-de-medico.module').then(m => m.GrupoDeMedicoModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
    ]
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
