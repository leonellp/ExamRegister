import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { InformacaoService } from 'src/app/shared/Services/informacao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-informacao',
  templateUrl: './form-informacao.component.html',
  styleUrls: ['./form-informacao.component.scss']
})
export class FormInformacaoComponent extends BaseFormComponent implements OnInit {

  @Output() novaInformacao = new EventEmitter<boolean>()

  constructor(
    private service: InformacaoService,
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
      idinformacao: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]],
      inativo: [null]
    }, { updateOn: 'blur' });
    
    this.route.params.subscribe(params => {
      let id = params['id'];

      if (id) {
        this.service.loadByID(id).subscribe(informacao => {
          this.formulario.patchValue(Object.assign({ }, informacao));
        });
      } this.formulario.patchValue(Object.assign({}, JSON.parse(sessionStorage.getItem("informacao") || "{}")));
    });

    this.formulario.valueChanges.subscribe(() => {
      this.setForm();
    });

  }

  submit() {
    let valueSubmit = Object.assign({ }, this.formulario.value);

    console.log(valueSubmit);

    if (this.formulario.valid) {
      let msgSuccess = 'informação criado com sucesso!';
      let msgError = 'Erro ao criar informação, tente novamente!';
      if (this.formulario.value.idinformacao) {
        msgSuccess = 'informação atualizado com sucesso!';
        msgError = 'Erro ao atualizar informação, tente novamente!';
      }
      this.service.save(valueSubmit).subscribe(
        success => {
          this.alertService.showAlertSuccess(msgSuccess);
          // this.router.navigate(['paciente/informacao']);
          delay(1000);
          this.novaInformacao.emit(true);
        },
        error => this.alertService.showAlertDanger(msgError)
      );
    }

  }

  onBack() {
    var rota = this.route.snapshot.url.toString();
    
    if (rota == 'novo') {
      this.novaInformacao.emit(true);
    } 
    else this.location.back();
    
  }

  setForm() {
    sessionStorage.setItem("informacao", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("informacao");
  }
}
