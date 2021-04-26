import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { MedicoDTO } from '../shared/DTOs/medico-dto';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { MedicoService } from '../shared/Services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  medicos?: Paginacao<MedicoDTO>;
  medicoSelecionado!: MedicoDTO;


  constructor(
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService
  ) { 
    this.onList(1);
  }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
    sessionStorage.removeItem("grupoDeMedico");
    sessionStorage.removeItem("orgao");
    sessionStorage.removeItem("diagnostico");
  }

  medicosCount(): number {
    return this.medicos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.medicoService.list((this.pagina -1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  onDelete(medico: MedicoDTO) {
    this.medicoSelecionado = medico;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse médico?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.medicoService.remove(medico.idmedico) : EMPTY)
      )
      .subscribe(
        result => {
          delay(1000);
          this.alertService.showAlertSuccess('Médico removida com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover médico. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(medico: MedicoDTO) {
    this.router.navigate(['editar', medico.idmedico], { relativeTo: this.route });
  } 
  
  reload() {
    location.reload();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
