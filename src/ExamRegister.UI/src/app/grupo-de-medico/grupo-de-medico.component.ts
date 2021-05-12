import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { GrupodemedicoDTO } from '../shared/DTOs/grupodemedico-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { GrupodemedicoService } from '../shared/Services/grupodemedico.service';

@Component({
  selector: 'app-grupo-de-medico',
  templateUrl: './grupo-de-medico.component.html',
  styleUrls: ['./grupo-de-medico.component.scss']
})
export class GrupoDeMedicoComponent implements OnInit {

  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  grupos?: Paginacao<GrupodemedicoDTO>;
  grupoSelecionado!: GrupodemedicoDTO;

  constructor(
    private grupoService: GrupodemedicoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService
  ) {
    this.onList(1);
  }

  ngOnInit(): void {
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

  gruposCount(): number {
    return this.grupos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.grupoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  onDelete(grupo: GrupodemedicoDTO) {
    this.grupoSelecionado = grupo;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse médico?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.grupoService.remove(grupo.idgrupodemedicos) : EMPTY)
      )
      .subscribe(
        result => {
          delay(1000);
          this.alertService.showAlertSuccess('Médico removida com sucesso.');
          this.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover médico. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(grupo: GrupodemedicoDTO) {
    this.router.navigate(['editar', grupo.idgrupodemedicos], { relativeTo: this.route});
  }

  reload() {
    location.reload();
  }
  
  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
