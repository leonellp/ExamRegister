import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { delay } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { GrupodemedicoDTO } from 'src/app/shared/DTOs/grupodemedico-dto';
import { MedicoDTO } from 'src/app/shared/DTOs/medico-dto';
import { MedicogrupoDTO } from 'src/app/shared/DTOs/medicogrupo-dto';
import { Location } from '@angular/common';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { GrupodemedicoService } from 'src/app/shared/Services/grupodemedico.service';

@Component({
  selector: 'app-form-grupo-de-medico',
  templateUrl: './form-grupo-de-medico.component.html',
  styleUrls: ['./form-grupo-de-medico.component.scss'],
})
export class FormGrupoDeMedicoComponent
  extends BaseFormComponent
  implements OnInit
{
  modalRef!: BsModalRef;

  get medicoGrupo(): MedicogrupoDTO[] {
    return Object.assign({}, this.formulario.value).medicoGrupo;
  }

  constructor(
    private grupoService: GrupodemedicoService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        idgrupodemedicos: [null],
        nome: [null, [Validators.required, Validators.maxLength(200)]],
        idexterno: [
          null,
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(2),
          ],
        ],
        inativo: [null],

        medicoGrupo: [null],
      },
      { updateOn: 'blur' }
    );

    this.route.params.subscribe((params) => {
      let idgrupodemedicos = params['id'];

      if (idgrupodemedicos) {
        this.grupoService.loadByID(idgrupodemedicos).subscribe((grupo) => {
          this.formulario.patchValue(Object.assign({}, grupo));
        });
      }
      this.formulario.patchValue(
        Object.assign({}, JSON.parse(sessionStorage.getItem('grupo') || '{}'))
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

    console.log(valueSubmit);

    if (this.formulario.valid) {
      let msgSuccess = 'Grupo cadastrado com sucesso!';
      let msgError = 'Erro ao cadastrar grupo, tente novamente!';

      if (this.formulario.value.idgrupodemedicos) {
        msgSuccess = 'Grupo atualizado com sucesso!';
        msgError = 'Erro ao atualizar grupo, tente novamente!';
      }

      this.grupoService.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.onBack();
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  incluirMedico(medico: MedicoDTO) {
    let grupo: GrupodemedicoDTO = Object.assign({}, this.formulario.value);

    if (grupo.medicoGrupo == null) {
      grupo.medicoGrupo = [];
    }

    grupo.medicoGrupo.push({
      idgrupomedico: null,
      idmedico: medico.idmedico,
      idgrupo: grupo.idgrupodemedicos,

      medico: medico,
    });

    this.formulario.patchValue(grupo);
  }

  onRemove(medicoDel: MedicogrupoDTO) {
    let grupo: GrupodemedicoDTO = Object.assign({}, this.formulario.value);

    if (grupo.medicoGrupo == null) {
      grupo.medicoGrupo = [];
    }

    grupo.medicoGrupo.forEach((value, i) => {
      if (value.idmedico == medicoDel.idmedico) grupo.medicoGrupo.splice(i, 1);
    });

    this.formulario.patchValue(grupo);
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem(
      'grupo',
      JSON.stringify(Object.assign({}, this.formulario.value))
    );
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem('grupo');
  }
}
