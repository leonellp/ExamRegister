import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Paginacao } from '../DTOs/Paginacao';
import { ReuniaoDTO } from '../DTOs/reuniao-dto';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {
  private readonly API = `${environment.API}reuniao`;

  constructor(private http: HttpClient) { }
  
  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<ReuniaoDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ReuniaoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(reuniao: ReuniaoDTO) {
    return this.http.post(this.API, reuniao).pipe(take(1));
  }

  private update(reuniao: ReuniaoDTO) {
    return this.http.put(`${this.API}/${reuniao.idrenuiao}`, reuniao).pipe(take(1));
  }

  save(reuniao: ReuniaoDTO) {
    if (reuniao.idrenuiao) {
      return this.update(reuniao);
    }
    return this.create(reuniao);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
