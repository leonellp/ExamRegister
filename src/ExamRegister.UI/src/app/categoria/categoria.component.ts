import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
  }

}
