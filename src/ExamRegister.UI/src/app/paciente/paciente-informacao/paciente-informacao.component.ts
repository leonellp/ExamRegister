import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InformacaoDTO } from 'src/app/shared/DTOs/informacao-dto';
import { InformacaoService } from 'src/app/shared/Services/informacao.service';
import { Location } from '@angular/common';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';

@Component({
  selector: 'app-paciente-informacao',
  templateUrl: './paciente-informacao.component.html',
  styleUrls: ['./paciente-informacao.component.css']
})
export class PacienteInformacaoComponent implements OnInit {
  
  @Output() inserirInformacao = new EventEmitter<InformacaoDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  informacao!: InformacaoDTO;
  informacoes?: Paginacao<InformacaoDTO>;

  public novaInformacaoModal!: BsModalRef;

  constructor(
    public modalService: BsModalService,
    private informacaoService: InformacaoService,
  ) {
    this.onList(1);
  }
  
  ngOnInit() {
  }

  informacoesCount(): number {
    return this.informacoes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.informacaoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(informacoes => {
      this.informacoes = informacoes;
    });
  }
  
  onClose() {
    this.modalService.hide();
  }
  
  incluirInfo(informacao: InformacaoDTO) {
    this.informacao = informacao;
    this.inserirInformacao.emit(this.informacao);
    this.onClose()
  }
  
  openModal(template: TemplateRef<any>) {
    this.novaInformacaoModal = this.modalService.show(template);
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
