import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { DatePipe, Location } from '@angular/common';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { ReuniaoService } from 'src/app/shared/Services/reuniao.service';

@Component({
  selector: 'app-form-reuniao',
  templateUrl: './form-reuniao.component.html',
  styleUrls: ['./form-reuniao.component.scss']
})
export class FormReuniaoComponent extends BaseFormComponent implements OnInit {

  constructor(
    private service: ReuniaoService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private datepipe: DatePipe
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idrenuiao: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      data: [null, [Validators.required]],
      inativo: [null]
    }, { updateOn: 'blur' });
    
    this.route.params.subscribe(params => {
      let id = params['id'];

      if (id) {
        this.service.loadByID(id).subscribe(reuniaoSelecionado => {
          let reuniao = Object.assign({}, this.formulario.value);

          reuniao = reuniaoSelecionado;
          reuniao.data = this.formatDate(reuniao.data);
          
          this.formulario.patchValue(reuniao);
        });
      } this.formulario.patchValue(Object.assign({}, JSON.parse(sessionStorage.getItem("reuniao") || "{}")));
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });    
  }

  submit() {
    let valueSubmit = Object.assign({ }, this.formulario.value);

    console.log(valueSubmit);

    if (this.formulario.valid) {
      let msgSuccess = 'reunião criada com sucesso!';
      let msgError = 'Erro ao criar reunião, tente novamente!';
      if (this.formulario.value.idrenuiao) {
        msgSuccess = 'reunião atualizado com sucesso!';
        msgError = 'Erro ao atualizar reunião, tente novamente!';
      }
      this.service.save(valueSubmit).subscribe(
        success => {
          this.alertService.showAlertSuccess(msgSuccess);
          this.router.navigate(['reuniao']);
        },
        error => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();
  }

  onBack() {
    this.location.back();
  }

  setForm() {
    sessionStorage.setItem("reuniao", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("reuniao");
  }

  formatDate(date: Date) {
    var data = this.datepipe.transform(date, 'yyyy-MM-dd');
    
    return data;
  }
}
