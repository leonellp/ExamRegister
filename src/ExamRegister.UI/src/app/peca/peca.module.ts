import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecaRoutingModule } from './peca-routing.module';
import { FormPecaComponent } from './form-peca/form-peca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PecaRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [FormPecaComponent]
})
export class PecaModule { }
