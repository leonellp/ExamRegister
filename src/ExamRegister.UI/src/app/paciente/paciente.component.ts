import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { PacienteDTO } from '../shared/DTOs/paciente-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { PacienteService } from '../shared/Services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  @Output() public paginaChage = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  pacientes?: Paginacao<PacienteDTO>;
  pacienteSelecionado!: PacienteDTO;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
  ) {
    this.onList(1);
  }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
  }

  PacientesCount(): number {
    return this.pacientes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.pacienteService.list((this.pagina -1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  onDelete(paciente: PacienteDTO) {
    this.pacienteSelecionado = paciente;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse paciente?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.pacienteService.remove(paciente.idpaciente) : EMPTY)
      )
      .subscribe(
        result => {
          delay(1000);
          this.alertService.showAlertSuccess('paciente removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover paciente. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(paciente: PacienteDTO) {
    this.router.navigate(['editar', paciente.idpaciente], { relativeTo: this.route })
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
