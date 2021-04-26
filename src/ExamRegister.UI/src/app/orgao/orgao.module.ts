import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgaoRoutingModule } from './orgao-routing.module';
import { FormOrgaoComponent } from './form-orgao/form-orgao.component';
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
    OrgaoRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
  ],
  declarations: [FormOrgaoComponent]
})
export class OrgaoModule { }
