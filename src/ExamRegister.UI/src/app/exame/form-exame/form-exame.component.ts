import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { DatePipe, Location } from '@angular/common';
import { ImagemDTO } from 'src/app/shared/DTOs/imagem-dto';
import { PacienteDTO } from 'src/app/shared/DTOs/paciente-dto';
import { CategoriaDTO } from 'src/app/shared/DTOs/categoria-dto';
import { ImagemService } from 'src/app/shared/Services/imagem.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrls: ['./form-exame.component.scss'],
})
export class FormExameComponent extends BaseFormComponent implements OnInit {
  editarImagem: boolean = false;
  exame!: ExameDTO;
  descImagem: string = '';
  modalRef!: BsModalRef;

  get paciente(): PacienteDTO {
    return Object.assign({}, this.formulario.value).paciente;
  }

  get orgao(): OrgaoDTO {
    return Object.assign({}, this.formulario.value).orgao;
  }

  get peca(): PecaDTO {
    return Object.assign({}, this.formulario.value).peca;
  }

  get medicoSolic(): MedicoDTO {
    return Object.assign({}, this.formulario.value).medicoSolic;
  }

  get medicoResp(): MedicoDTO {
    return Object.assign({}, this.formulario.value).medicoResp;
  }

  get grupodeMedico(): GrupodemedicoDTO {
    return Object.assign({}, this.formulario.value).grupodeMedico;
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
    private imagemService: ImagemService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
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
        suspeitaclinica: [
          null,
          [Validators.required, Validators.maxLength(300)],
        ],
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
        outros: [null, [Validators.maxLength(300)]],
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
        grupodeMedico: [null, Validators.required],
        medicoSolic: [null, Validators.required],
        clinica: [null, Validators.required],
        medicoResp: [null, Validators.required],
        reuniao: [null, Validators.required],
        examemedicorespdiagnostico: [null, Validators.required],
        categoriaexame: [null, Validators.required],
        imagem: [null],
      },
      { updateOn: '' }
    );

    this.route.params.subscribe((params) => {
      let idexame = params['id'];

      if (idexame) {
        this.exameService.loadByID(idexame).subscribe((exame) => {
          var _exame = Object.assign({}, this.formulario.value);

          _exame = exame;

          _exame.transplantadofigado = this.convertString(
            exame.transplantadofigado
          );
          _exame.hipertensaoarterial = this.convertString(
            exame.hipertensaoarterial
          );
          _exame.ictericia = this.convertString(exame.ictericia);
          _exame.edema = this.convertString(exame.edema);
          _exame.ascite = this.convertString(exame.ascite);
          _exame.circulacaocolateral = this.convertString(
            exame.circulacaocolateral
          );
          _exame.varizesofagicas = this.convertString(exame.varizesofagicas);
          _exame.hepatomegalia = this.convertString(exame.hepatomegalia);
          _exame.figadoendurecido = this.convertString(exame.figadoendurecido);
          _exame.figadonodular = this.convertString(exame.figadonodular);
          _exame.esplenomegalia = this.convertString(exame.esplenomegalia);
          _exame.doencaautoimune = this.convertString(exame.doencaautoimune);
          _exame.usamedicamento = this.convertString(exame.usamedicamento);
          _exame.vhc = this.convertString(exame.vhc);
          _exame.descvhc = this.convertString(exame.descvhc);
          _exame.vhb = this.convertString(exame.vhb);
          _exame.descvhb = this.convertString(exame.descvhb);
          _exame.hiv = this.convertString(exame.hiv);
          _exame.deschiv = this.convertString(exame.deschiv);

          _exame.datain = this.formatDate(_exame.datain);
          _exame.dataout = this.formatDate(_exame.dataout);
          _exame.datatransplante = this.formatDate(_exame.datatransplante);

          _exame.imagem.forEach((imagem: ImagemDTO) => {
            imagem.src = `https://localhost:5001/v1/Imagem/${imagem.idimagem}/download`;
          });

          this.formulario.patchValue(_exame);
        });
      }
      this.formulario.patchValue(
        Object.assign({}, JSON.parse(sessionStorage.getItem('exame') || '{}'))
      );
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

    valueSubmit.transplantadofigado = this.convertNumber(
      valueSubmit.transplantadofigado
    );
    valueSubmit.hipertensaoarterial = this.convertNumber(
      valueSubmit.hipertensaoarterial
    );
    valueSubmit.ictericia = this.convertNumber(valueSubmit.ictericia);
    valueSubmit.edema = this.convertNumber(valueSubmit.edema);
    valueSubmit.ascite = this.convertNumber(valueSubmit.ascite);
    valueSubmit.circulacaocolateral = this.convertNumber(
      valueSubmit.circulacaocolateral
    );
    valueSubmit.varizesofagicas = this.convertNumber(
      valueSubmit.varizesofagicas
    );
    valueSubmit.hepatomegalia = this.convertNumber(valueSubmit.hepatomegalia);
    valueSubmit.figadoendurecido = this.convertNumber(
      valueSubmit.figadoendurecido
    );
    valueSubmit.figadonodular = this.convertNumber(valueSubmit.figadonodular);
    valueSubmit.esplenomegalia = this.convertNumber(valueSubmit.esplenomegalia);
    valueSubmit.doencaautoimune = this.convertNumber(
      valueSubmit.doencaautoimune
    );
    valueSubmit.usamedicamento = this.convertNumber(valueSubmit.usamedicamento);
    valueSubmit.vhc = this.convertNumber(valueSubmit.vhc);
    valueSubmit.descvhc = this.convertNumber(valueSubmit.descvhc);
    valueSubmit.vhb = this.convertNumber(valueSubmit.vhb);
    valueSubmit.descvhb = this.convertNumber(valueSubmit.descvhb);
    valueSubmit.hiv = this.convertNumber(valueSubmit.hiv);
    valueSubmit.deschiv = this.convertNumber(valueSubmit.deschiv);

    if (this.formulario.valid) {
      let msgSuccess = 'exame cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar exame, tente novamente!';

      if (this.formulario.value.idexame) {
        msgSuccess = 'exame atualizado com sucesso!';
        msgError = 'Erro ao atualizar exame, tente novamente!';
      }
      this.exameService.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.location.back();
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    }

    if (this.formulario.invalid)
      this.alertService.showAlertDanger(
        '* Confira os campos em Vermelho ou com (*)'
      );
  }

  incluirPaciente(paciente: PacienteDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.paciente = paciente;
    exame.idpaciente = paciente.idpaciente;

    this.formulario.patchValue(exame);
  }

  incluirOrgao(orgao: OrgaoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.orgao = orgao;
    exame.idorgao = orgao.idorgao;

    this.formulario.patchValue(exame);
  }

  incluirPeca(peca: PecaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.peca = peca;
    exame.idpeca = peca.idpeca;

    this.formulario.patchValue(exame);
  }

  incluirMedicosolic(medicosolic: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.medicoSolic = medicosolic;
    exame.idmedicosolic = medicosolic.idmedico;

    this.formulario.patchValue(exame);
  }

  incluirMedicoresp(medicoresp: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.medicoResp = medicoresp;
    exame.idmedicoresp = medicoresp.idmedico;

    this.formulario.patchValue(exame);
  }

  incluirGrupodemedico(grupo: GrupodemedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.grupodeMedico = grupo;
    exame.idgrupomedico = grupo.idgrupodemedicos;

    this.formulario.patchValue(exame);
  }

  incluirClinica(clinica: ClinicaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.clinica = clinica;
    exame.idclinica = clinica.idclinica;

    this.formulario.patchValue(exame);
  }

  incluirReuniao(reuniao: ReuniaoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.reuniao = reuniao;
    exame.idreuniao = reuniao.idrenuiao;

    this.formulario.patchValue(exame);
  }

  incluirDiagnostico(diagnostico: DiagnosticoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    exame.diagnostico = diagnostico.nome;

    this.formulario.patchValue(exame);
  }

  incluirMedicorespdiag(medico: MedicoDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.examemedicorespdiagnostico == null) {
      exame.examemedicorespdiagnostico = [];
    }

    exame.examemedicorespdiagnostico.push({
      idexmeddiag: null,
      idexame: exame.idexame,
      idmedico: medico.idmedico,

      medico: medico,
    });

    this.formulario.patchValue(exame);
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

    this.formulario.patchValue(exame);
  }

  incluirCategoria(categoria: CategoriaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.categoriaexame == null) exame.categoriaexame = [];

    exame.categoriaexame.push({
      idcategoriaexame: null,
      idcategoria: categoria.idcategoria,
      idexame: exame.idexame,

      categoria: categoria,
    });

    this.formulario.patchValue(exame);
  }

  removerCategoria(categoria: CategoriaDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.categoriaexame == null) exame.categoriaexame = [];

    exame.categoriaexame.forEach((value, i) => {
      if (value.idcategoria == categoria.idcategoria)
        exame.categoriaexame.splice(i, 1);
    });

    this.formulario.patchValue(exame);
  }

  incluirImagem(idimagem: string) {
    console.log(idimagem);

    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.imagem == null) {
      exame.imagem = [];
    }

    this.imagemService.loadByID(idimagem).subscribe((imagem) => {
      exame.imagem.push(imagem);
    });

    console.log('Imagens do form:', this.formulario.value.imagem);

    this.setForm();
    this.formulario.patchValue(exame);
  }

  removerImagem(imagem: ImagemDTO) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.imagem == null) {
      exame.imagem = [];
    }

    exame.imagem.forEach((value, i) => {
      if (value.nome == imagem.nome) exame.imagem.splice(i, 1);
    });

    this.formulario.patchValue(exame);
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem(
      'exame',
      JSON.stringify(Object.assign({}, this.formulario.value))
    );
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem('exame');
    this.click = false;
  }

  submitImagem(file: File) {
    let exame: ExameDTO = Object.assign({}, this.formulario.value);

    if (exame.imagem == null) exame.imagem = [];

    let msgSuccess = 'Imagem enviada com sucesso!';
    let msgError = 'Erro ao enviar imagem!';

    this.imagemService.create(file).subscribe(
      (imagem) => {
        imagem.src = `https://localhost:5001/v1/Imagem/${imagem.idimagem}/download`;
        exame.imagem.push(imagem);
        this.formulario.patchValue(exame);
        this.setForm();
        this.alertService.showAlertSuccess(msgSuccess);
        delay(1000);
      },
      () => this.alertService.showAlertDanger(msgError)
    );
  }

  visualizarImagem(idimagem: string) {
    this.router.navigate(['exame/visualizar', idimagem]);
  }

  convertNumber(numero: string): number {
    return Number(numero);
  }

  convertString(numero: number | undefined): string {
    return String(numero);
  }

  formatDate(date: Date) {
    var data = this.datepipe.transform(date, 'yyyy-MM-dd');
    return data;
  }

  setNomeImagem(imagem: ImagemDTO, $event: any) {
    imagem.nome = $event.srcElement.value;
    this.setForm();
  }

  editarNomeImagem(idimagme: string) {
    this.editarImagem = !this.editarImagem;
  }
}
