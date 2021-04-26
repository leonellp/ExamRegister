import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OrgaoDTO } from '../DTOs/orgao-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService {
  private readonly API = `${environment.API}orgao`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<OrgaoDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<OrgaoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(orgao: OrgaoDTO) {
    return this.http.post(this.API, orgao).pipe(take(1));
  }

  private update(orgao: OrgaoDTO) {
    return this.http.put(`${this.API}/${orgao.idorgao}`, orgao).pipe(take(1));
  }

  save(orgao: OrgaoDTO) {
    if (orgao.idorgao) {
      return this.update(orgao);
    }
    return this.create(orgao);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
