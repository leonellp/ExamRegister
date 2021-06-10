import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Location } from '@angular/common';
import { FormValidations } from 'src/app/shared/form-validations';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { UsuarioService } from 'src/app/shared/Services/usuario.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
})
export class NovoUsuarioComponent extends BaseFormComponent implements OnInit {
  constructor(
    private service: UsuarioService,
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
      idusuario: [null],
      nome: [null, [Validators.required, Validators.maxLength(200)]],
      user: [null, [Validators.required, Validators.maxLength(200)]],
      password: [null, [Validators.required, Validators.maxLength(200)]],
      confirmaPassword: [
        null,
        [
          FormValidations.equalsTo('password'),
          Validators.required,
          Validators.maxLength(200),
        ],
      ],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      inativo: [null],
    });

    this.route.params.subscribe((params) => {
      let userid = params['id'];

      if (userid) {
        this.service.loadByID(userid).subscribe((usuarioSelecionado) => {
          this.formulario.patchValue(
            Object.assign({ confirmaPassword: null }, usuarioSelecionado)
          );
        });
      }
      this.formulario.patchValue(
        Object.assign(
          {},
          JSON.parse(sessionStorage.getItem('novoUsuario') || '{}')
        )
      );
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    if (this.formulario.valid) {
      let msgSuccess = 'usuário criado com sucesso!';
      let msgError = 'Erro ao criar usuário, tente novamente!';

      if (this.formulario.value.idusuario) {
        msgSuccess = 'usuário atualizado com sucesso!';
        msgError = 'Erro ao atualizar usuário, tente novamente!';
      }

      this.service.save(valueSubmit).subscribe(
        (success) => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.onBack();
        },
        (error) => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem(
      'novoUsuario',
      JSON.stringify(Object.assign({}, this.formulario.value))
    );
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem('novoUsuario');
  }
}
