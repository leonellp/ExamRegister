import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { ClinicaDTO } from '../shared/DTOs/clinica-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { ClinicaService } from '../shared/Services/clinica.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  @Output() public paginaChage = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  clinicas?: Paginacao<ClinicaDTO>;
  clinicaSelecionada!: ClinicaDTO;

  constructor(
    private clinicaService: ClinicaService,
    private route: ActivatedRoute,
    private router: Router,
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

  clinicasCount(): number {
    return this.clinicas?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.clinicaService.list((this.pagina -1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(clinicas => {
      this.clinicas = clinicas;
    });
  }

  onDelete(clinica: ClinicaDTO) {
    this.clinicaSelecionada = clinica;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa clinica?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.clinicaService.remove(clinica.idclinica) : EMPTY)
      )
      .subscribe(
        result => {
          delay(1000);
          this.alertService.showAlertSuccess('Clínica removida com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover clínica. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(clinica: ClinicaDTO) {
    this.router.navigate(['editar', clinica.idclinica], { relativeTo: this.route })
  }

  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
