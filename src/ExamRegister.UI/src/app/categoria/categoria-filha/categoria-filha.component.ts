import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { CategoriaDTO } from 'src/app/shared/DTOs/categoria-dto';

@Component({
  selector: 'app-categoria-filha',
  templateUrl: './categoria-filha.component.html',
  styleUrls: ['./categoria-filha.component.scss']
})
export class CategoriaFilhaComponent extends BaseFormComponent implements OnInit {

  @Output() inserirFilha = new EventEmitter<CategoriaDTO>();

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService
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
    })
  }

  onClose() {
    this.modalService.hide();
  }

  submit() {
    if (this.formulario.valid) {
      this.inserirFilha.emit(Object.assign({}, this.formulario.value));
      this.onClose();
    } else this.formulario.markAllAsTouched();
  }

}
