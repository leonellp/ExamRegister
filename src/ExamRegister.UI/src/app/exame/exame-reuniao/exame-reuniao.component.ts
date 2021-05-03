import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Paginacao } from 'src/app/shared/DTOs/Paginacao';
import { ReuniaoDTO } from 'src/app/shared/DTOs/reuniao-dto';
import { ReuniaoService } from 'src/app/shared/Services/reuniao.service';

@Component({
  selector: 'app-exame-reuniao',
  templateUrl: './exame-reuniao.component.html',
  styleUrls: ['./exame-reuniao.component.scss']
})
export class ExameReuniaoComponent implements OnInit {

  @Output() inserirReuniao = new EventEmitter<ReuniaoDTO>();
  
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;
  
  reuniao!: ReuniaoDTO;
  reunioes?: Paginacao<ReuniaoDTO>;

  constructor(
    private reuniaoService: ReuniaoService,
    private router: Router,
    public modalService: BsModalService,
  ) { 
    this.onList(1);
  }

  ngOnInit(): void {
  }

  reunioesCount(): number {
    return this.reunioes?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.reuniaoService.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(reunioes => {
      this.reunioes = reunioes;
    });
  }

  onClose() {
    this.modalService.hide();
  }

  incluirReuniao(reuniao: ReuniaoDTO) {
    this.reuniao = reuniao;
    this.inserirReuniao.emit(this.reuniao);
    this.onClose();
  }

  newReuniao() {
    this.router.navigate(['reuniao/novo']);
    this.onClose();
  }

  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }
}
