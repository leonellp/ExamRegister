import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CategoriaFilhaComponent } from './categoria-filha/categoria-filha.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [FormCategoriaComponent, CategoriaFilhaComponent]
})
export class CategoriaModule { }
