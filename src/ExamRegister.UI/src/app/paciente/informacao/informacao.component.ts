import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { InformacaoDTO } from 'src/app/shared/DTOs/informacao-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { InformacaoService } from 'src/app/shared/Services/informacao.service';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css']
})
export class InformacaoComponent implements OnInit {
  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  informacoes!: Paginacao<InformacaoDTO>;
  informacaoSelecionado!: InformacaoDTO;

  constructor(
    private service: InformacaoService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onList(1);
   }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
    sessionStorage.removeItem("grupoDeMedico");
    sessionStorage.removeItem("orgao");
    sessionStorage.removeItem("diagnostico");
  }

  informacoesCount(): number {
    return this.informacoes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.service.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(informacoes => {
      this.informacoes = informacoes;
    });
  }

  onDelete(informacao: InformacaoDTO) {
    this.informacaoSelecionado = informacao;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse dianóstico?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(informacao.idinformacao) : EMPTY)
      )
      .subscribe(
        result => {
          this.alertService.showAlertSuccess('Diagnóstico removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover diagnóstico. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(informacao: InformacaoDTO) {
    this.router.navigate(['editar', informacao.idinformacao], { relativeTo: this.route });
  }

  novo() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  reload() {
    this.onList(1);
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
