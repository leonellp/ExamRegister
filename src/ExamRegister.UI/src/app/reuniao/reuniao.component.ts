import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { ReuniaoDTO } from '../shared/DTOs/reuniao-dto';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { ReuniaoService } from '../shared/Services/reuniao.service';

@Component({
  selector: 'app-reuniao',
  templateUrl: './reuniao.component.html',
  styleUrls: ['./reuniao.component.css']
})
export class ReuniaoComponent implements OnInit {

  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  reunioes!: Paginacao<ReuniaoDTO>;
  reuniaoSelecionado!: ReuniaoDTO;

  constructor(
    private service: ReuniaoService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onList(1);
   }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
  }

  reunioesCount(): number {
    return this.reunioes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.service.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(reunioes => {
      this.reunioes = reunioes;
    });
  }

  onDelete(reuniao: ReuniaoDTO) {
    this.reuniaoSelecionado = reuniao;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa reunião?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(reuniao.idrenuiao) : EMPTY)
      )
      .subscribe(
        result => {
          this.alertService.showAlertSuccess('reunião removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover reunião. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(reuniao: ReuniaoDTO) {
    this.router.navigate(['editar', reuniao.idrenuiao], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
