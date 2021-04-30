import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PacienteDTO } from 'src/app/shared/DTOs/paciente-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { PacienteService } from 'src/app/shared/Services/paciente.service';

@Component({
  selector: 'app-exame-paciente',
  templateUrl: './exame-paciente.component.html',
  styleUrls: ['./exame-paciente.component.scss']
})
export class ExamePacienteComponent implements OnInit {

  @Output() inserirPaciente = new EventEmitter<PacienteDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  paciente!: PacienteDTO;
  pacientes?: Paginacao<PacienteDTO>;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    public modalService: BsModalService,
  ) { 
    this.onList(1);
  }

  ngOnInit(): void {
  }

  pacientesCount(): number {
    return this.pacientes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.pacienteService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirInfo(paciente: PacienteDTO) {
    this.paciente = paciente;
    this.inserirPaciente.emit(this.paciente);
    this.onClose()
  }

  newMedico() {
    this.router.navigate(['paciente/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
