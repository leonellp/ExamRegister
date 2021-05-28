import { Directive, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  click: boolean = false;

  formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit(): any;

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      this.click = true;
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaInvalidTouched(campo: string) {
    return (
      this.formulario.get(campo)?.invalid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaValidTouched(campo: string) {
    return (
      this.formulario.get(campo)?.valid
    )
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaInvalidTouched(campo),
      'is-valid': this.verificaValidTouched(campo)
    };
  }

  aplicaCssErroButton(campo: string) {
    return {
      'btn-outline-danger': this.verificaBotaoInvalid(campo),
      'btn-outline-success': this.verificaBotaoValid(campo)
    }
  }

  verificaBotaoValid(campo: string) {
    return (
      this.formulario.get(campo)?.valid
    );
  }

  verificaBotaoInvalid(campo: string) {
    return (
      (this.formulario.get(campo)?.invalid && this.click == true)
    )
  }  
}
