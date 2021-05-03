import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { PecaDTO } from 'src/app/shared/DTOs/peca-dto';
import { PecaService } from 'src/app/shared/Services/peca.service';

@Component({
  selector: 'app-exame-peca',
  templateUrl: './exame-peca.component.html',
  styleUrls: ['./exame-peca.component.scss']
})
export class ExamePecaComponent implements OnInit {

  @Output() inserirPeca = new EventEmitter<PecaDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  peca!: PecaDTO;
  pecas?: Paginacao<PecaDTO>;
  
  constructor(
    private pecaService: PecaService,
    private router: Router,
    public modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  pecasCount(): number {
    return this.pecas?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.pecaService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(pecas => {
      this.pecas = pecas;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirPeca(peca: PecaDTO) {
    this.peca = peca;
    this.inserirPeca.emit(this.peca);
    this.onClose();
  }

  newPeca() {
    this.router.navigate(['peca/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
