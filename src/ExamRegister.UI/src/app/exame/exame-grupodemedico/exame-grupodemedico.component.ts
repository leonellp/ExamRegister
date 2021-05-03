import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GrupodemedicoDTO } from 'src/app/shared/DTOs/grupodemedico-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { GrupodemedicoService } from 'src/app/shared/Services/grupodemedico.service';

@Component({
  selector: 'app-exame-grupodemedico',
  templateUrl: './exame-grupodemedico.component.html',
  styleUrls: ['./exame-grupodemedico.component.scss']
})
export class ExameGrupodemedicoComponent implements OnInit {

  @Output() inserirGrupodemedico = new EventEmitter<GrupodemedicoDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  grupo!: GrupodemedicoDTO;
  grupos?: Paginacao<GrupodemedicoDTO>;

  constructor(
    private grupoService: GrupodemedicoService,
    private router: Router,
    public modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }
  
  gruposCount(): number {
    return this.grupos?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.grupoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(grupos => {
      this.grupos = grupos;
    });
  }
  
  onClose() {
    this.modalService.hide();
  }

  incluirGrupodemedico(grupo: GrupodemedicoDTO) {
    this.grupo = grupo;
    this.inserirGrupodemedico.emit(this.grupo);
    this.onClose();
  }

  newGrupo() {
    this.router.navigate(['grupodemedico/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
