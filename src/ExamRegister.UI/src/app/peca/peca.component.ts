import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { PecaDTO } from '../shared/DTOs/peca-dto';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { PecaService } from '../shared/Services/peca.service';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.css']
})
export class PecaComponent implements OnInit {
  
  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  pecas?: Paginacao<PecaDTO>;
  pecaSelecionado!: PecaDTO;

  constructor(
    private service: PecaService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
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

  pecasCount(): number {
    return this.pecas?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.service.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(pecas => {
      this.pecas = pecas;   
    });
  }

  onDelete(peca: PecaDTO) {
    this.pecaSelecionado = peca;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa peça?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(peca.idpeca) : EMPTY)
      )
      .subscribe(
        result => {
          this.alertService.showAlertSuccess('Paça removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover Paça. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(peca: PecaDTO) {
    this.router.navigate(['editar', peca.idpeca], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
