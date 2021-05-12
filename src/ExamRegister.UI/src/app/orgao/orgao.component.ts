import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { OrgaoDTO } from '../shared/DTOs/orgao-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { OrgaoService } from '../shared/Services/orgao.service';

@Component({
  selector: 'app-orgao',
  templateUrl: './orgao.component.html',
  styleUrls: ['./orgao.component.css']
})
export class OrgaoComponent implements OnInit {
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  orgaos!: Paginacao<OrgaoDTO>;
  orgaoSelecionado!: OrgaoDTO;

  constructor(
    private service: OrgaoService,
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

  orgaosCount(): number {
    return this.orgaos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.service.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(orgaos => {
      this.orgaos = orgaos;
    });
  }

  onDelete(orgao: OrgaoDTO) {
    this.orgaoSelecionado = orgao;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse orgão?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(orgao.idorgao) : EMPTY)
      )
      .subscribe(
        result => {
          this.alertService.showAlertSuccess('orgão removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover orgão. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(orgao: OrgaoDTO) {
    this.router.navigate(['editar', orgao.idorgao], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
