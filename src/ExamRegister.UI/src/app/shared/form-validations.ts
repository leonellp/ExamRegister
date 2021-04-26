import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {

    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true };
    }
    return null;
  }

  static equalsTo(outroCampo: string) {
    const validator = (formControl: FormControl) => {
      if (outroCampo == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const campo = (<FormGroup>formControl.root).get(outroCampo);

      if (!campo) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (campo.value !== formControl.value) {
        return { equalsTo : outroCampo };
      }
      return null;
    };
    return validator;
  }

  static estadoValidator(control: FormControl) {
    const estado = control.value;
    if (estado && estado.idestado != null){
      return null;
    }
      return { estadoInvalido : true };
  }

  static cidadeValidator(control: FormControl) {
    const cidade = control.value;
    if (cidade && cidade.idcidade != null){
      return null;
    }
      return { cidadeInvalido : true };
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) :string {
    let config: { [validatorName: string]: string} = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.',
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': 'Campos não são iguais',
      'email': 'Email inválido',
      'pattern': 'Campo inválido',
      'estadoInvalido': 'Selecione um estado',
      'cidadeInvalido': 'Selecione uma cidade'
    };

    return config[validatorName];
  }
}
