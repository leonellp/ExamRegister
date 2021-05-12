import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { CategoriaDTO } from '../shared/DTOs/categoria-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { CategoriaService } from '../shared/Services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {

  @Output() public paginaChage = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  categorias?: Paginacao<CategoriaDTO>;
  categoriaSelecionada!: CategoriaDTO

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService
  ) {
    this.onList(1);
  }

  ngOnInit() {
    sessionStorage.removeItem("clinica");
    sessionStorage.removeItem("diagnostico");
    sessionStorage.removeItem("exame");
    sessionStorage.removeItem("categoria");
    sessionStorage.removeItem("medicoSalvo");
    sessionStorage.removeItem("orgao");
    sessionStorage.removeItem("paciente");
    sessionStorage.removeItem("peca");
    sessionStorage.removeItem("reuniao");
    sessionStorage.removeItem("novoUsuario");
    sessionStorage.removeItem("informacao");
    sessionStorage.removeItem("grupo");
  }

  categoriasCount(): number {
    return this.categorias?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.categoriaService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  onDelete(categoria: CategoriaDTO) {
    this.categoriaSelecionada = categoria;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que desaja remover essa categoria?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.categoriaService.remove(categoria.idcategoria) : EMPTY)
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

  onEdit(categoria: CategoriaDTO) {
    this.router.navigate(['editar', categoria.idcategoria], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
