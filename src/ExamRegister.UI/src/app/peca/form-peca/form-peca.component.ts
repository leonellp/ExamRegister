import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Location } from '@angular/common';
import { PecaDTO } from 'src/app/shared/DTOs/peca-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { PecaService } from 'src/app/shared/Services/peca.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-peca',
  templateUrl: './form-peca.component.html',
  styleUrls: ['./form-peca.component.scss']
})
export class FormPecaComponent extends BaseFormComponent implements OnInit {

  constructor(
    private service: PecaService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idpeca: [null],
      nome: [null, [Validators.required, Validators.maxLength(200)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      inativo: [null]
    }, { updateOn: 'blur' });

    this.route.params.subscribe(params => {
      let iddiag = params['id'];

      if (iddiag) {
        this.service.loadByID(iddiag).subscribe(pecaSelecionado => {
          this.formulario.setValue(Object.assign({}, pecaSelecionado));
        });
      } this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("peca") || "{}")));
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    console.log(valueSubmit);

    if (this.formulario.valid) {

      let msgSuccess = 'peça criado com sucesso!';
      let msgError = 'Erro ao criar peça, tente novamente!';

      if (this.formulario.value.idpeca) {

        msgSuccess = 'peça atualizado com sucesso!';
        msgError = 'Erro ao atualizar peça, tente novamente!';

      }
      this.service.save(valueSubmit).subscribe(
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

  setForm() {
    sessionStorage.setItem("peca", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("peca");
  }

}
