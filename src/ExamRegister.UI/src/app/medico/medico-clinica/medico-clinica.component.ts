import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ClinicaDTO } from 'src/app/shared/DTOs/clinica-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { AlertModalService } from 'src/app/shared/Services/alert-modal.service';
import { ClinicaService } from 'src/app/shared/Services/clinica.service';

@Component({
  selector: 'app-medico-clinica',
  templateUrl: './medico-clinica.component.html',
  styleUrls: ['./medico-clinica.component.css']
})
export class MedicoClinicaComponent implements OnInit {

  @Output() inserirClinica = new EventEmitter<ClinicaDTO>();

  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  clinica!: ClinicaDTO;
  clinicas?: Paginacao<ClinicaDTO>;

  constructor(
    private clinicaService: ClinicaService,
    private router: Router,
    public modalService: BsModalService,
  ) {
    this.onList(1);
   }

  ngOnInit() {
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

  onClose() {
    this.modalService.hide();
  }

  incluirClinica(clinica: ClinicaDTO) {
    this.clinica = clinica;
    this.inserirClinica.emit(this.clinica);
    this.onClose();
  }

  newClinica() {
    this.router.navigate(['clinica/nova']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
