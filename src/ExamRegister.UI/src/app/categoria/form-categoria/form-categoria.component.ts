import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CategoriaService } from 'src/app/shared/Services/categoria.service';
import { Location } from '@angular/common';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent extends BaseFormComponent implements OnInit {

  modalRef!: BsModalRef;

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idcategoria: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      nomecompleto: [null, [Validators.required, Validators.maxLength(200)]],
      idcategoriapai: [null],
      inativo: [null],
      idexterno: [null, [Validators.required, Validators.maxLength(20)]]
    }, { updateOn: '' });

    this.route.params.subscribe(params => {
      let idcategoria = params['id'];

      if (idcategoria) {
        this.categoriaService.loadByID(idcategoria).subscribe(categoria => {
          this.formulario.setValue(Object.assign({}, categoria));
        });
      } this.formulario.setValue(Object.assign({}, JSON.parse(sessionStorage.getItem("categoria") || "{}")));
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
      let msgSuccess = 'Categoria cadastrada com sucesso!';
      let msgError = 'Erro ao cadastrar categoria, tente novamente mais tarde!';

      if (this.formulario.value.idcategoria) {
        msgSuccess = 'Categoria atualizada com sucesso!';
        msgError = 'Erro ao atualizar categoria, tente novamente mais tarde!';
      }

      this.categoriaService.save(valueSubmit).subscribe(
        () => {
          this.alertService.showAlertSuccess(msgSuccess);
          delay(1000);
          this.onBack();
        },
        () => this.alertService.showAlertDanger(msgError)
      );
    } else this.formulario.markAllAsTouched();

  }

  setForm() {
    sessionStorage.setItem("categoria", JSON.stringify(Object.assign({}, this.formulario.value)));
  }

  onBack() {
    this.location.back();
  }

  onClear() {
    this.formulario.reset();
    sessionStorage.removeItem("categoria");
  }
}
