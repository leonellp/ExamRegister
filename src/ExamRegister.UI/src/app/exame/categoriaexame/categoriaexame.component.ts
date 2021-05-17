import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CategoriaDTO } from 'src/app/shared/DTOs/categoria-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { CategoriaService } from 'src/app/shared/Services/categoria.service';

@Component({
  selector: 'app-categoriaexame',
  templateUrl: './categoriaexame.component.html',
  styleUrls: ['./categoriaexame.component.scss']
})
export class CategoriaexameComponent implements OnInit {

  @Output() inserirCategoria = new EventEmitter<CategoriaDTO>();

  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  categoria!: CategoriaDTO;
  categorias?: Paginacao<CategoriaDTO>;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    public modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  categoriasCount(): number {
    return this.categorias?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.categoriaService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa, "").subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  onClose() {
    this.modalService.hide();
  }

  incluirCategoria(categoria: CategoriaDTO) {
    this.categoria = categoria;
    this.inserirCategoria.emit(this.categoria);
    this.onClose();
  }

  newCategoria() {
    this.router.navigate(['categoria/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
