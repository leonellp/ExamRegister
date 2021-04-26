import { NgModule } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    NgbPaginationModule,
    NgbModule
  ],
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    ErrorMsgComponent,
    PaginacaoComponent,
    InputFieldComponent
  ],
  exports: [
    ErrorMsgComponent,
    PaginacaoComponent,
    InputFieldComponent
  ]
})
export class SharedModule { }
