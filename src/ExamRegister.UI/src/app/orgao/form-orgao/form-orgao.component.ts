import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Location } from '@angular/common';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { OrgaoService } from 'src/app/shared/Services/orgao.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-orgao',
  templateUrl: './form-orgao.component.html',
  styleUrls: ['./form-orgao.component.scss']
})
export class FormOrgaoComponent extends BaseFormComponent implements OnInit {

  constructor(
    private service: OrgaoService,
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
      idorgao: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      inativo: [null]
    }, { updateOn: 'blur' });
    
    this.route.params.subscribe(params => {
      let iddiag = params['id'];

      if (iddiag) {
        this.service.loadByID(iddiag).subscribe(orgao => {         
          this.formulario.patchValue(Object.assign({ }, orgao));
        });
      }  this.formulario.patchValue(Object.assign({}, JSON.parse(sessionStorage.getItem("orgao") || "{}")));
    });
    
    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });
  }

  submit() {
    let valueSubmit = Object.assign({ }, this.formulario.value);

    console.log(valueSubmit);

    if (this.formulario.valid) {
      let msgSuccess = 'orgão criado com sucesso!';
      let msgError = 'Erro ao criar orgão, tente novamente!';
      if (this.formulario.value.idorgao) {
        msgSuccess = 'orgão atualizado com sucesso!';
        msgError = 'Erro ao atualizar orgão, tente novamente!';
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
    sessionStorage.setItem("orgao", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("orgao");
  }
}
