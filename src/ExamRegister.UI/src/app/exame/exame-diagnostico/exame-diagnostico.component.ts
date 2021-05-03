import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DiagnosticoDTO } from 'src/app/shared/DTOs/diagnostico-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { DiagnosticoService } from 'src/app/shared/Services/diagnostico.service';

@Component({
  selector: 'app-exame-diagnostico',
  templateUrl: './exame-diagnostico.component.html',
  styleUrls: ['./exame-diagnostico.component.scss']
})
export class ExameDiagnosticoComponent implements OnInit {

  @Output() inserirDiagnostico = new EventEmitter<DiagnosticoDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  diagnostico!: DiagnosticoDTO;
  diagnosticos?: Paginacao<DiagnosticoDTO>;

  constructor(
    private diagnosticoService: DiagnosticoService,
    private router: Router,
    public modalService: BsModalService,
  ) { 
    this.onList(1);
  }

  ngOnInit(): void {
  }

  diagnosticosCount(): number {
    return this.diagnosticos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.diagnosticoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(diagnosticos => {
      this.diagnosticos = diagnosticos;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirDiagnostico(diagnostico: DiagnosticoDTO) {
    this.diagnostico = diagnostico;
    this.inserirDiagnostico.emit(this.diagnostico);
    this.onClose();
  }

  newDiagnostico() {
    this.router.navigate(['diagnostico/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
