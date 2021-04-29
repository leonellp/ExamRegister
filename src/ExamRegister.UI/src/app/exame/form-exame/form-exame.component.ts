import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { PacienteDTO } from 'src/app/shared/DTOs/paciente-dto';

@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrls: ['./form-exame.component.scss']
})
export class FormExameComponent extends BaseFormComponent implements OnInit {

  modalRef!: BsModalRef;

  get paciente(): PacienteDTO {
    return Object.assign({}, this.formulario.value).paciente;
  }

  constructor(config: NgbNavConfig) {
    config.destroyOnHide = false;
    config.roles = false;
    super();
  }

  ngOnInit(): void {
  }

  submit() {
    throw new Error('Method not implemented.');
  }
}
