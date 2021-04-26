import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Paginacao } from '../DTOs/Paginacao';
import { PecaDTO } from '../DTOs/peca-dto';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private readonly API = `${environment.API}peca`;

  constructor(private http: HttpClient) { }
  
  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<PecaDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<PecaDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(peca: PecaDTO) {
    return this.http.post(this.API, peca).pipe(take(1));
  }

  private update(peca: PecaDTO) {
    return this.http.put(`${this.API}/${peca.idpeca}`, peca).pipe(take(1));
  }

  save(peca: PecaDTO) {
    if (peca.idpeca) {
      return this.update(peca);
    }
    return this.create(peca);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
