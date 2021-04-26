import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent implements OnInit {

  @Input()
  public count: number = 0;
  @Input()
  public pageSize: number = 10;

  @Input()
  public page: number = 0;
  @Output()
  public pageChange = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  pageChange2($event: any) {
    this.pageChange.emit($event);
    
  }
}
