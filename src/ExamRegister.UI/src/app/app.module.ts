import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ClinicaComponent } from './clinica/clinica.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicoComponent } from './medico/medico.component';
import { GrupoDeMedicoComponent } from './grupo-de-medico/grupo-de-medico.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { OrgaoComponent } from './orgao/orgao.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PecaComponent } from './peca/peca.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ExameComponent } from './exame/exame.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClinicaComponent,
    HomeComponent,
    MedicoComponent,
    GrupoDeMedicoComponent,
    DiagnosticoComponent,
    OrgaoComponent,
    PacienteComponent,
    PecaComponent,
    UsuarioComponent,
    ExameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthService, 
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
