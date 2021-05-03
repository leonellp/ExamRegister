import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MedicoDTO } from 'src/app/shared/DTOs/medico-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { MedicoService } from 'src/app/shared/Services/medico.service';

@Component({
  selector: 'app-exame-med-resp-diag',
  templateUrl: './exame-med-resp-diag.component.html',
  styleUrls: ['./exame-med-resp-diag.component.css']
})
export class ExameMedRespDiagComponent implements OnInit {

  @Output() inserirMedicorespdiag = new EventEmitter<MedicoDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  medico!: MedicoDTO;
  medicos?: Paginacao<MedicoDTO>;

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    public modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  medicosCount(): number {
    return this.medicos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.medicoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirMedico(medico: MedicoDTO) {
    this.medico = medico;
    this.inserirMedicorespdiag.emit(this.medico);
    this.onClose();
  }

  newMedico() {
    this.router.navigate(['medico/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
