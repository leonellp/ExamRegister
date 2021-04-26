import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GrupodemedicoDTO } from '../DTOs/grupodemedico-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class GrupodemedicoService {
  private readonly API = `${environment.API}grupodemedico`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<GrupodemedicoDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<GrupodemedicoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(grupodemedico: GrupodemedicoDTO) {
    return this.http.post(this.API, grupodemedico).pipe(take(1));
  }

  private update(grupodemedico: GrupodemedicoDTO) {
    return this.http.put(`${this.API}/${grupodemedico.idgrupodemedicos}`, grupodemedico).pipe(take(1));
  }

  save(grupodemedico: GrupodemedicoDTO) {
    if (grupodemedico.idgrupodemedicos) {
      return this.update(grupodemedico);
    }
    return this.create(grupodemedico);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
