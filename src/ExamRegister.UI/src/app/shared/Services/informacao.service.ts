import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InformacaoDTO } from '../DTOs/informacao-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root',
})
export class InformacaoService {
  private readonly API = `${environment.API}informacao`;

  constructor(private http: HttpClient) {}

  list(
    skip: number,
    top: number,
    count: boolean,
    soinativo?: boolean,
    pesquisa?: string
  ) {
    return this.http
      .get<Paginacao<InformacaoDTO>>(
        this.API +
          '?skip=' +
          skip +
          '&top=' +
          top +
          '&count=' +
          count +
          '&soinativo=' +
          soinativo +
          '&pesquisa=' +
          pesquisa
      )
      .pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<InformacaoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(informacao: InformacaoDTO) {
    return this.http.post(this.API, informacao).pipe(take(1));
  }

  private update(informacao: InformacaoDTO) {
    return this.http
      .put(`${this.API}/${informacao.idinformacao}`, informacao)
      .pipe(take(1));
  }

  save(informacao: InformacaoDTO) {
    if (informacao.idinformacao) {
      return this.update(informacao);
    }
    return this.create(informacao);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
