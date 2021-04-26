import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReuniaoRoutingModule } from './reuniao-routing.module';
import { FormReuniaoComponent } from './form-reuniao/form-reuniao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReuniaoComponent } from './reuniao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ReuniaoRoutingModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ],
  declarations: [FormReuniaoComponent, ReuniaoComponent]
})
export class ReuniaoModule { }
