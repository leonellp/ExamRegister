import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CategoriaexameDTO } from 'src/app/shared/DTOs/categoriaexame-dto';
import { ClinicaDTO } from 'src/app/shared/DTOs/clinica-dto';
import { DiagnosticoDTO } from 'src/app/shared/DTOs/diagnostico-dto';
import { ExamemedicorespdiagnosticoDTO } from 'src/app/shared/DTOs/examemedicorespdiagnostico-dto';
import { GrupodemedicoDTO } from 'src/app/shared/DTOs/grupodemedico-dto';
import { MedicoDTO } from 'src/app/shared/DTOs/medico-dto';
import { OrgaoDTO } from 'src/app/shared/DTOs/orgao-dto';
import { ExameDTO } from 'src/app/shared/DTOs/exame-dto';
import { PecaDTO } from 'src/app/shared/DTOs/peca-dto';
import { ReuniaoDTO } from 'src/app/shared/DTOs/reuniao-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { ExameService } from 'src/app/shared/Services/exame.service';
import { Location, NgClass } from '@angular/common';
import { ImagemDTO } from 'src/app/shared/DTOs/imagem-dto';
import { PacienteDTO } from 'src/app/shared/DTOs/paciente-dto';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrls: ['./form-exame.component.scss']
})
export class FormExameComponent extends BaseFormComponent implements OnInit {
  invalido: boolean = false;

  modalRef!: BsModalRef;

  get orgao(): OrgaoDTO {
    return Object.assign({}, this.formulario.value).orgao;
  }

  get peca(): PecaDTO {
    return Object.assign({}, this.formulario.value).peca;
  }

  get medicosolic(): MedicoDTO {
    return Object.assign({}, this.formulario.value).medicosolic;
  }

  get medicoresp(): MedicoDTO {
    return Object.assign({}, this.formulario.value).medicoresp;
  }

  get grupodemedico(): GrupodemedicoDTO {
    return Object.assign({}, this.formulario.value).grupodemedico;
  }

  get clinica(): ClinicaDTO {
    return Object.assign({}, this.formulario.value).clinica;
  }

  get reuniao(): ReuniaoDTO {
    return Object.assign({}, this.formulario.value).reuniao;
  }

  get diagnostico(): DiagnosticoDTO {
    return Object.assign({}, this.formulario.value).diagnostico;
  }

  get examemedicorespdiagnostico(): ExamemedicorespdiagnosticoDTO {
    return Object.assign({}, this.formulario.value).examemedicorespdiagnostico;
  }

  get categoriaexame(): CategoriaexameDTO {
    return Object.assign({}, this.formulario.value).categoriaexame;
  }

  get imagem(): ImagemDTO {
    return Object.assign({}, this.formulario.value).imagem;
  }

  constructor(
    private exameService: ExameService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idexame: [null],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      datain: [null, Validators.required],
      dataout: [null, Validators.required],
      idpaciente: [null, Validators.required],
      idorgao: [null, Validators.required],
      idpeca: [null, Validators.required],
      idmedicoresp: [null, Validators.required],
      idmedicosolic: [null, Validators.required],
      idreuniao: [null, Validators.required],
      idclinica: [null, Validators.required],
      diagnostico: [null, [Validators.required, Validators.maxLength(10000)]],
      dadosclinicos: [null, [Validators.required, Validators.maxLength(300)]],
      suspeitaclinica: [null, [Validators.required, Validators.maxLength(300)]],
      peso: [null, Validators.required],
      altura: [null, Validators.required],
      ast: [null, Validators.required],
      alt: [null, Validators.required],
      ggt: [null, Validators.required],
      colesterol: [null, Validators.required],
      gamaglobulina: [null, Validators.required],
      triglicerides: [null, Validators.required],
      glicemia: [null, Validators.required],
      falc: [null, Validators.required],
      biltotal: [null, Validators.required],
      bildireta: [null, Validators.required],
      outros: [null, [Validators.required, Validators.maxLength(300)]],
      inativo: [null],
      idgrupomedico: [null, Validators.required],
      conclusao: [null, [Validators.required, Validators.maxLength(300)]],
      observacao: [null],
      transplantadofigado: [null],
      hipertensaoarterial: [null],
      ictericia: [null],
      ascite: [null],
      edema: [null],
      circulacaocolateral: [null],
      varizesofagicas: [null],
      hepatomegalia: [null],
      figadoendurecido: [null],
      figadonodular: [null],
      esplenomegalia: [null],
      datatransplante: [null],
      descdoencaautoimune: [null],
      doencaautoimune: [null],
      usamedicamento: [null],
      descusamedicamento: [null],
      autoanticorpos: [null],
      vhc: [null],
      descvhc: [null],
      vhb: [null],
      descvhb: [null],
      hiv: [null],
      deschiv: [null],

      paciente: [null, Validators.required],
      orgao: [null, Validators.required],
      peca: [null, Validators.required],
      grupodemedico: [null, Validators.required],
      medicosolic: [null, Validators.required],
      clinica: [null, Validators.required],
      medicoresp: [null, Validators.required],
      reuniao: [null, Validators.required],
      examemedicorespdiagnostico: [null, Validators.required],
      categoriaexame: [null, Validators.required],
      imagem: [null, Validators.required],
    }, { updateOn: '' });

    this.route.params.subscribe(params => {
      let idexame = params['id'];

      if (idexame) {
        this.exameService.loadByID(idexame).subscribe(exame => {

          this.formulario.setValue(Object.assign({}, exame));
        });
      } this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("exame") || "{}")));
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

    this.click = true;

    console.log(valueSubmit);

    if (this.formulario.valid) {

      let msgSuccess = 'exame cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar exame, tente novamente!';

      if (this.formulario.value.idexame) {

        msgSuccess = 'exame atualizado com sucesso!';
        msgError = 'Erro ao atualizar exame, tente novamente!';
      }
      // this.exameService.save(valueSubmit).subscribe(
      //   () => {
      //     this.alertService.showAlertSuccess(msgSuccess);
      //     delay(1000);
      //     this.location.back();
      //   },
      //   () => this.alertService.showAlertDanger(msgError)
      // );
    }

    if (this.formulario.invalid) this.alertService.showAlertDanger('* Confira os campos em Vermelho ou com (*)');
  }

  incluirPaciente(paciente: PacienteDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.paciente = paciente;
    exame.idpaciente = paciente.idpaciente;

    this.formulario.setValue(exame);
  }

  incluirOrgao(orgao: OrgaoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.orgao = orgao;
    exame.idorgao = orgao.idorgao;

    this.formulario.setValue(exame);
  }

  incluirPeca(peca: PecaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.peca = peca;
    exame.idpeca = peca.idpeca;

    this.formulario.setValue(exame);
  }

  incluirMedicosolic(medicosolic: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.medicosolic = medicosolic;
    exame.idmedicosolic = medicosolic.idmedico;

    this.formulario.setValue(exame);
  }

  incluirMedicoresp(medicoresp: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.medicoresp = medicoresp;
    exame.idmedicoresp = medicoresp.idmedico;

    this.formulario.setValue(exame);
  }

  incluirGrupodemedico(grupo: GrupodemedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.grupodemedico = grupo;
    exame.idgrupomedico = grupo.idgrupodemedicos;

    this.formulario.setValue(exame);
  }

  incluirClinica(clinica: ClinicaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.clinica = clinica;
    exame.idclinica = clinica.idclinica;

    this.formulario.setValue(exame);
  }

  incluirReuniao(reuniao: ReuniaoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.reuniao = reuniao;
    exame.idreuniao = reuniao.idrenuiao;

    this.formulario.setValue(exame);
  }

  incluirDiagnostico(diagnostico: DiagnosticoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.diagnostico = diagnostico.nome;

    this.formulario.setValue(exame);
  }

  incluirMedicorespdiag(medico: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.examemedicorespdiagnostico == null) {
      exame.examemedicorespdiagnostico = [];
    }

    exame.examemedicorespdiagnostico.push(
      {
        idexmeddiag: null,
        idexame: exame.idexame,
        idmedico: medico.idmedico,

        medico: medico
      });

    this.formulario.setValue(exame);
  }

  removerMedicorespdiag(medico: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.examemedicorespdiagnostico == null) {
      exame.examemedicorespdiagnostico = [];
    }

    exame.examemedicorespdiagnostico.forEach((value, i) => {
      if (value.idmedico == medico.idmedico)
        exame.examemedicorespdiagnostico.splice(i, 1);
    });

    this.formulario.setValue(exame);
  }

  incluirImagem(imagem: FileList) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    const fileImagem = imagem.item(0);

    console.log("imagem:", fileImagem!.name);
    
    exame.imagem.push(
      {
        idimagem: null,
        nome: fileImagem!.name,
        url: null,
        idexame: null,
        dataupload: null,
        inativo: null,
      }
    )

    this.formulario.setValue(exame);
  }

  onBack() {
    this.location.back();    
  }

  setForm() {
    sessionStorage.setItem("exame", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("exame");
    this.click = false;
  }
}
