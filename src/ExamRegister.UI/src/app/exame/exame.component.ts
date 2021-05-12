import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.css']
})
export class ExameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem("clinica");
    sessionStorage.removeItem("diagnostico");
    sessionStorage.removeItem("exame");
    sessionStorage.removeItem("categoria");
    sessionStorage.removeItem("medicoSalvo");
    sessionStorage.removeItem("orgao");
    sessionStorage.removeItem("paciente");
    sessionStorage.removeItem("peca");
    sessionStorage.removeItem("reuniao");
    sessionStorage.removeItem("novoUsuario");
    sessionStorage.removeItem("informacao");
    sessionStorage.removeItem("grupo");
  }

}
