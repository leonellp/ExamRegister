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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { CategoriaComponent } from './categoria/categoria.component';
import { DatePipe } from '@angular/common';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    ExameComponent,
    CategoriaComponent,
    LoginComponent,
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
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
  ],
  providers: [AuthService, AuthGuard, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
