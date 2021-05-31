import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss']
})
export class ImagemComponent implements OnInit {

  src: string | undefined;

  constructor(
    public modalService: BsModalService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let idimagem = params['id'];

      this.src = `https://localhost:5001/v1/Imagem/${idimagem}/download`
    });
  }

  onBack() {
    this.location.back();
  }
}
