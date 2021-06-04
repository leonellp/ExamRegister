import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { ExameDTO } from '../shared/DTOs/exame-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { ExameService } from '../shared/Services/exame.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css'],
})
export class ExameComponent implements OnInit {
  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = '';
  temPesquisa: boolean = false;

  exames?: Paginacao<ExameDTO>;
  exameSelecionado!: ExameDTO;

  constructor(
    private exameService: ExameService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService
  ) {
    this.onList(1);
  }

  ngOnInit() {
    sessionStorage.removeItem('clinica');
    sessionStorage.removeItem('diagnostico');
    sessionStorage.removeItem('exame');
    sessionStorage.removeItem('categoria');
    sessionStorage.removeItem('medicoSalvo');
    sessionStorage.removeItem('orgao');
    sessionStorage.removeItem('paciente');
    sessionStorage.removeItem('peca');
    sessionStorage.removeItem('reuniao');
    sessionStorage.removeItem('novoUsuario');
    sessionStorage.removeItem('informacao');
    sessionStorage.removeItem('grupo');
  }

  examesCount(): number {
    return this.exames?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.exameService
      .list(
        (this.pagina - 1) * this.pageSize,
        this.pageSize,
        true,
        false,
        this.pesquisa
      )
      .subscribe((exames) => {
        this.exames = exames;
      });
  }

  onDelete(exame: ExameDTO) {
    this.exameSelecionado = exame;

    const result$ = this.alertService.showConfirm(
      'Confirmação',
      'Tem certeza que deseja remover esse exame?'
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.exameService.remove(exame.idexame) : EMPTY
        )
      )
      .subscribe(
        (result) => {
          delay(1000);
          this.alertService.showAlertSuccess('Exame removido com sucesso!');
          location.reload();
        },
        (error) => {
          this.alertService.showAlertDanger(
            'Erro ao remover exame. Tente novamente mais tarde.'
          );
        }
      );
  }

  onEdit(exame: ExameDTO) {
    this.router.navigate(['editar', exame.idexame], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
