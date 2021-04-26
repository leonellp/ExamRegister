import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { InformacaoDTO } from 'src/app/shared/DTOs/informacao-dto';
import { PacienteDTO } from 'src/app/shared/DTOs/paciente-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { PacienteService } from 'src/app/shared/Services/paciente.service';
import { PacienteinformacaoDTO } from 'src/app/shared/DTOs/pacienteinformacao-dto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HistoricopacienteDTO } from 'src/app/shared/DTOs/historicopaciente-dto';
import { delay } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss']
})
export class FormPacienteComponent extends BaseFormComponent implements OnInit {

  modalRef!: BsModalRef;

  get pacienteInformacao(): PacienteinformacaoDTO[] {
    return Object.assign({}, this.formulario.value).pacienteInformacao;
  }

  get historicosInseridos(): HistoricopacienteDTO[] {
    return Object.assign({}, this.formulario.value).historicoPaciente;
  }

  constructor(
    private pacienteService: PacienteService,
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
      idpaciente: [null],
      nome: [null, [Validators.required, Validators.maxLength(200)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      sexo: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      inativo: [null],
      historicoPaciente: [null],
      pacienteInformacao: [null]
    }, { updateOn: 'blur' });

    this.route.params.subscribe(params => {
      let idpaciente = params['id'];

      if (idpaciente) {
        this.pacienteService.loadByID(idpaciente).subscribe(pacienteSelecionado => {

          pacienteSelecionado.sexo = this.GetSexo(pacienteSelecionado.sexo);

          this.formulario.setValue(Object.assign({}, pacienteSelecionado));
        });
      } this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("paciente") || "{}")));
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit.sexo = this.GetSexo(valueSubmit.sexo);

    if (this.formulario.valid) {
      let msgSuccess = 'Paciente cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar paciente, tente novamente!';
      if (this.formulario.value.idpaciente) {
        msgSuccess = 'Paciente atualizado com sucesso!';
        msgError = 'Erro ao atualizar paciente, tente novamente!';
      }
      this.pacienteService.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.location.back();
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  incluirInfo(informacaoInsert: InformacaoDTO) {

    let paciente: PacienteDTO = Object.assign({}, this.formulario.value);

    if (paciente.pacienteInformacao == null) {
      paciente.pacienteInformacao = [];
    }

    paciente.pacienteInformacao.push(
      {
        Idpacienteinformacao: null,
        idinformacao: informacaoInsert.idinformacao,
        idpaciente: paciente.idpaciente,

        informacao: informacaoInsert
      });

    this.formulario.setValue(paciente);
  }

  onDeleteInfo(informacaoDelete: PacienteinformacaoDTO) {
    let paciente: PacienteDTO = Object.assign({}, this.formulario.value);

    if (paciente.pacienteInformacao == null) {
      paciente.pacienteInformacao = [];
    }

    paciente.pacienteInformacao.forEach((value, i) => {
      if (value.idinformacao == informacaoDelete.idinformacao)
        this.pacienteInformacao.splice(i, 1);
    });

    this.formulario.setValue(paciente);
  }

  incluirHistorico(historicoSelecionado: HistoricopacienteDTO) {
    let paciente: PacienteDTO = Object.assign({}, this.formulario.value);

    if (paciente.historicoPaciente == null) {
      paciente.historicoPaciente = [];
    }

    paciente.historicoPaciente.push(
      {
        idhispaciente: null,
        descricao: historicoSelecionado.descricao,
        idpaciente: paciente?.idpaciente,
        data: historicoSelecionado.data,
        inativo: null
      });

    this.formulario.setValue(paciente);
  }

  onDeleteHistorico(historicoSelecionado: HistoricopacienteDTO) {
    let paciente: PacienteDTO = Object.assign({}, this.formulario.value);

    if (paciente.historicoPaciente == null) {
      paciente.historicoPaciente = [];
    }

    paciente.historicoPaciente.forEach((value, i) => {
      if (value.idhispaciente == historicoSelecionado.idhispaciente)
        this.historicosInseridos.splice(i, 1);
    });
    
    this.formulario.setValue(paciente);
  }

  GetSexo(sexo: string) {
    if (sexo == "Masculino") sexo = "M";
    if (sexo == "M") sexo = "Masculino";

    if (sexo == "Feminino") sexo = "F";
    if (sexo == "F") sexo = "Feminino";

    if (sexo == "Outro") sexo = "O";
    if (sexo == "O") sexo = "Outro";

    if (sexo == "Prefiro não declarar") sexo = "P";
    if (sexo == "P") sexo = "Prefiro não declarar";

    return sexo;
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem("paciente", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("paciente");
  }

}
