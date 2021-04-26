import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClinicaDTO } from 'src/app/shared/DTOs/clinica-dto';
import { MedicoclinicaDTO } from 'src/app/shared/DTOs/medicoclinica-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { MedicoService } from 'src/app/shared/Services/medico.service';
import { Location } from '@angular/common';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { delay } from 'rxjs/operators';
import { MedicoDTO } from 'src/app/shared/DTOs/medico-dto';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrls: ['./form-medico.component.scss']
})
export class FormMedicoComponent extends BaseFormComponent implements OnInit {

  modalRef!: BsModalRef;

  constructor(
    private medicoService: MedicoService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idmedico: [null],
      nome: [null, [Validators.required, Validators.maxLength(200)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(254), Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
      telefone2: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
      celular: [null, [Validators.required, Validators.maxLength(14), Validators.minLength(10)]],
      inativo: [null],
      crm: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],

      medicoClinica: [null]
    }, { updateOn: 'blur' });

    this.route.params.subscribe(params => {
      let idmedico = params['id'];

      if (idmedico) {
        this.medicoService.loadByID(idmedico).subscribe(medico => {

          this.formulario.setValue(Object.assign({}, medico));
        });
      } this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("medicoSalvo") || "{}")));
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
      console.log("Formulário salvo");
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    if (this.formulario.valid) {

      let msgSuccess = 'Médico cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar médico, tente novamente!';

      if (this.formulario.value.idmedico) {
        msgSuccess = 'Médico atualizado com sucesso!';
        msgError = 'Erro ao atualizar médico, tente novamente!';
      }

      this.medicoService.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.onBack();
        },
        () => this.alertService.showAlertDanger(msgError)
      );

      sessionStorage.removeItem("medicoSalvo");

    } else this.formulario.markAllAsTouched();
  }

  incluirClinica(clinica: ClinicaDTO) {

    let medico: MedicoDTO = Object.assign({}, this.formulario.value);
    if (medico.medicoClinica == null) {
      medico.medicoClinica = [];
    }

    medico.medicoClinica.push(
      {
        idmedcli: null,
        idclinica: clinica.idclinica,
        idmedico: medico.idmedico,
        clinica: clinica
      });

    this.formulario.setValue(medico);
  }

  onRemove(clinicaDelete: MedicoclinicaDTO) {
    let medico: MedicoDTO = Object.assign({}, this.formulario.value);

    if (medico.medicoClinica == null) {
      medico.medicoClinica = [];
    }

    medico.medicoClinica.forEach((value, i) => {
      if (value.idclinica == clinicaDelete.idclinica)
        medico.medicoClinica.splice(i, 1);
    });

    this.formulario.setValue(medico);
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem("medicoSalvo", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("medicoSalvo");
  }

  get medicoClinica(): MedicoclinicaDTO[] {
    return Object.assign({}, this.formulario.value).medicoClinica;
  }


}
