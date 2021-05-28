import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CategoriaService } from 'src/app/shared/Services/categoria.service';
import { Location } from '@angular/common';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { delay, switchMap, take } from 'rxjs/operators';
import { CategoriaDTO } from 'src/app/shared/DTOs/categoria-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent extends BaseFormComponent implements OnInit {

  modalRef!: BsModalRef;

  categoriasFilhas?: Paginacao<CategoriaDTO>;

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
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
          this.formulario.patchValue(Object.assign({}, categoria));
        });


        this.categoriaService.list(0, 0, true, false, "", idcategoria).subscribe(categoriasfilhas => {
          this.categoriasFilhas = categoriasfilhas;
        });

      } this.formulario.patchValue(Object.assign({}, JSON.parse(sessionStorage.getItem("categoria") || "{}")));
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
          location.reload();
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

  incluirFilha(categoria: CategoriaDTO) {
    categoria.idcategoriapai = this.formulario.value.idcategoria;

    let msgSuccess = 'Categoria filha cadastrada com sucesso!';
    let msgError = 'Erro ao cadastrar categoria filha, tente novamente mais tarde!';

    this.categoriaService.save(categoria).subscribe(
      () => {
        this.alertService.showAlertSuccess(msgSuccess);
        delay(1000);        
      },
      () => this.alertService.showAlertDanger(msgError)
    );
  }

  onEditFilha(categoriaFilha: CategoriaDTO) {
    this.router.navigate(['categoria/editar', categoriaFilha.idcategoria]);
    
  }

  onDeleteFilha(categoriaFilha: CategoriaDTO) {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que desaja remover essa categoria?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.categoriaService.remove(categoriaFilha.idcategoria) : EMPTY)
      )
      .subscribe(
        result => {
          delay(1000);
          this.alertService.showAlertSuccess('Categoria removida com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao tentar remover essa categoria. Tende novamente mais tarde!')
        }
      );
  }
}
