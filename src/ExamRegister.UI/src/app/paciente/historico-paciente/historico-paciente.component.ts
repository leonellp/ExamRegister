import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { HistoricopacienteDTO } from 'src/app/shared/DTOs/historicopaciente-dto';

@Component({
  selector: 'app-historico-paciente',
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css']
})
export class HistoricoPacienteComponent extends BaseFormComponent implements OnInit {

  @Output() inserirHistorico = new EventEmitter<HistoricopacienteDTO>();

  public modalRef!: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      idhispaciente: [null],
      descricao: [null, [Validators.required, Validators.maxLength(200)]],
      idpaciente: [null],
      data: [null, [Validators.required]],
      inativo: [null],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onClose(){
    this.modalService.hide();
  }

  submit() {
    if (this.formulario.valid) {
      this.inserirHistorico.emit(Object.assign({}, this.formulario.value));
      this.onClose()
    } else this.formulario.markAllAsTouched();
  }

}
