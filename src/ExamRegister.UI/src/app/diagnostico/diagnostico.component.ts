import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { DiagnosticoDTO } from '../shared/DTOs/diagnostico-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { DiagnosticoService } from '../shared/Services/diagnostico.service';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {

  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  diagnosticos?: Paginacao<DiagnosticoDTO>;
  diagnosticoSelecionado!: DiagnosticoDTO;

  constructor(
    private diagnosticoSevice: DiagnosticoService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
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

  diagnosticosCount(): number {
    return this.diagnosticos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.diagnosticoSevice.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(diagnosticos => {
      this.diagnosticos = diagnosticos;
    });
  }

  onDelete(diagnostico: DiagnosticoDTO) {
    this.diagnosticoSelecionado = diagnostico;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse dianóstico?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.diagnosticoSevice.remove(diagnostico.iddiagnostico) : EMPTY)
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

  onEdit(diagnostico: DiagnosticoDTO) {
    this.router.navigate(['editar', diagnostico.iddiagnostico], { relativeTo: this.route });
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
