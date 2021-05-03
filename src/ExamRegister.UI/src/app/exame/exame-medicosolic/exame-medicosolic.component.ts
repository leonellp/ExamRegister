import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MedicosolicDTO } from 'src/app/shared/DTOs/medicosolic-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { MedicoService } from 'src/app/shared/Services/medico.service';

@Component({
  selector: 'app-exame-medicosolic',
  templateUrl: './exame-medicosolic.component.html',
  styleUrls: ['./exame-medicosolic.component.scss']
})
export class ExameMedicosolicComponent implements OnInit {

  @Output() inserirMedicosolic = new EventEmitter<MedicosolicDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  medico!: MedicosolicDTO;
  medicos?: Paginacao<MedicosolicDTO>;

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

  incluirMedico(medico: MedicosolicDTO) {
    this.medico = medico;
    this.inserirMedicosolic.emit(this.medico);
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
