import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { DiagnosticoDTO } from 'src/app/shared/DTOs/diagnostico-dto';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { DiagnosticoService } from 'src/app/shared/Services/diagnostico.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-diagnostico',
  templateUrl: './form-diagnostico.component.html',
  styleUrls: ['./form-diagnostico.component.scss']
})
export class FormDiagnosticoComponent extends BaseFormComponent implements OnInit {
  
  constructor(
    private service: DiagnosticoService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      iddiagnostico: [null],
      nome: [null, [Validators.required, Validators.maxLength(200)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      inativo: [null]
    }, { updateOn: 'blur' });
    
    this.route.params.subscribe(params => {
      let iddiag = params['id'];

      if (iddiag) {
        this.service.loadByID(iddiag).subscribe(diagnosticoSelecionado => {
          this.formulario.setValue(Object.assign({ }, diagnosticoSelecionado));
        });
      }this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("diagnostico") || "{}")));
    });   

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });    
  }

  submit() {
    let valueSubmit = Object.assign({ }, this.formulario.value);

    if (this.formulario.valid) {
      let msgSuccess = 'diagnóstico criado com sucesso!';
      let msgError = 'Erro ao criar diagnóstico, tente novamente!';
      if (this.formulario.value.iddiagnostico) {
        msgSuccess = 'diagnóstico atualizado com sucesso!';
        msgError = 'Erro ao atualizar diagnóstico, tente novamente!';
      }
      this.service.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          this.router.navigate(['diagnostico']);
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem("diagnostico", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();    
  }

}
