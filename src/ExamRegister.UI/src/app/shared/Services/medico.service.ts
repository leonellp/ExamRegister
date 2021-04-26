import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MedicoDTO } from '../DTOs/medico-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private readonly API = `${environment.API}medico`;

  constructor(private http: HttpClient) { }
  
  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<MedicoDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
      ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<MedicoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(medico: MedicoDTO) {
    return this.http.post(this.API, medico).pipe(take(1));
  }

  private update(medico: MedicoDTO) {
    return this.http.put(`${this.API}/${medico.idmedico}`, medico).pipe(take(1));
  }

  save(medico: MedicoDTO) {
    if (medico.idmedico) {
      return this.update(medico);
    }
    return this.create(medico);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
