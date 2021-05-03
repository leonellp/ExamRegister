import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OrgaoDTO } from 'src/app/shared/DTOs/orgao-dto';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { OrgaoService } from 'src/app/shared/Services/orgao.service';

@Component({
  selector: 'app-exame-orgao',
  templateUrl: './exame-orgao.component.html',
  styleUrls: ['./exame-orgao.component.scss']
})
export class ExameOrgaoComponent implements OnInit {

  @Output() inserirOrgao = new EventEmitter<OrgaoDTO>();

  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  orgao!: OrgaoDTO;
  orgaos?: Paginacao<OrgaoDTO>;

  constructor(
    private orgaoService: OrgaoService,
    private router: Router,
    public modalService: BsModalService,
  ) {
    this.onList(1);
  }

  ngOnInit(): void {
  }

  orgaosCount(): number {
    return this.orgaos?.count ?? 0;
  }

  onList($event: any) {
    this.orgao = $event;
    this.orgaoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(orgaos => {
      this.orgaos = orgaos;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirOrgao(orgao: OrgaoDTO) {
    this.orgao = orgao;
    this.inserirOrgao.emit(this.orgao);
    this.onClose();
  }

  newOrgao() {
    this.router.navigate(['orgao/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
