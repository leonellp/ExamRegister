import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { debounceTime, delay, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CidadeDTO } from 'src/app/shared/DTOs/cidade-dto';
import { ClinicaDTO } from 'src/app/shared/DTOs/clinica-dto';
import { EnderecoDTO } from 'src/app/shared/DTOs/endereco-dto';
import { EstadoDTO } from 'src/app/shared/DTOs/estado-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { CidadeService } from 'src/app/shared/Services/cidade.service';
import { ClinicaService } from 'src/app/shared/Services/clinica.service';
import { EnderecoService } from 'src/app/shared/Services/endereco.service';
import { EstadoService } from 'src/app/shared/Services/estado.service';
import { Location } from '@angular/common';
import { FormValidations } from 'src/app/shared/form-validations';
import { Observable, OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-form-clinica',
  templateUrl: './form-clinica.component.html',
  styleUrls: ['./form-clinica.component.scss']
})
export class FormClinicaComponent extends BaseFormComponent implements OnInit {

  cidades: CidadeDTO[] = [];
  estados: EstadoDTO[] = [];

  cidade!: CidadeDTO;
  estado!: EstadoDTO;
  clinica!: ClinicaDTO;
  endereco!: EnderecoDTO;
  formatterEstado = (estado: EstadoDTO) => estado.nome;
  formatterCidade = (cidade: CidadeDTO) => cidade.nome;

  constructor(
    private formBuilder: FormBuilder,
    private clinicaSevice: ClinicaService,
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private enderecoService: EnderecoService,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    super();
    this.listEstados();

    this.formulario = this.formBuilder.group({
      idclinica: [null],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(254), Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
      celular: [null, [Validators.required, Validators.maxLength(14), Validators.minLength(10)]],
      nome: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      idendereco: [null],
      inativo: [null],

      endereco: this.formBuilder.group({
        idendereco: [null],
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        idcidade: [null],
        idestado: [null],
        inativo: [null],

        estado: [null, FormValidations.estadoValidator],
        cidade: [null, FormValidations.cidadeValidator]
      }),
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let idclinica = params['id'];

      if (idclinica) {
        this.clinicaSevice.loadByID(idclinica).subscribe(clinica => {
          this.clinica = clinica;

          this.formulario.patchValue(Object.assign({}, this.clinica));
        });
      }
    });
  }

  semFoco() {
    let idestado = Object.assign({}, this.formulario.value).endereco.estado.idestado;
    if (idestado) {
      this.listCidades(idestado);
    }
  }

  listCidades(idestado: string) {
    console.log(idestado);

    this.cidadeService.list(idestado, false).subscribe(cidades => {
      this.cidades = cidades;
    });
  }

  listEstados() {
    this.estadoService.list().subscribe(estados => {
      this.estados = estados;
    })
  }


  procuraEstado: OperatorFunction<string, readonly { idestado: string, nome: string }[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.estados.filter(estado => new RegExp(term, 'mi').test(estado.nome)).slice(0, 10))
  );

  procuraCidade: OperatorFunction<string, readonly { idcidade: string, nome: string }[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.cidades.filter(cidade => new RegExp(term, 'mi').test(cidade.nome)).slice(0, 10))
  );

  submit() {

    let valueSubmit = Object.assign({}, this.formulario.value);

    if (valueSubmit.endereco.estado) valueSubmit.endereco.idestado = valueSubmit.endereco.estado.idestado;

    if (valueSubmit.endereco.idestado) valueSubmit.endereco.idcidade = valueSubmit.endereco.cidade.idcidade;

    if (this.formulario.valid) {
      
      let msgSuccess = 'Clínica cadastrada com sucesso!';
      let msgError = 'Erro ao cadastrar clínica, tente novamente!';

      if (this.formulario.value.idclinica) {
        msgSuccess = 'Clínica atualizada com sucesso!';
        msgError = 'Erro ao atualizar clínica, tente novamente!';
      }

      this.clinicaSevice.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.onBack();
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  onBack() {
    this.location.back();
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("grupoDeMedico");
  }
}
