import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CategoriaService } from 'src/app/shared/Services/categoria.service';
import { Location } from '@angular/common';

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
    // private alertService: AlertModalComponent,
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
      
    }

    setForm() {
      sessionStorage.setItem("categoria", JSON.stringify(Object.assign({}, this.formulario.value)));
    }

    onBack() {
      this.location.back();
    }
}
