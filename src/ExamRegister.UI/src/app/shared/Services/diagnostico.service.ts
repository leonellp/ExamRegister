import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DiagnosticoDTO } from '../DTOs/diagnostico-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  private readonly API = `${environment.API}diagnostico`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<DiagnosticoDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<DiagnosticoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(diagnostico: DiagnosticoDTO) {
    return this.http.post(this.API, diagnostico).pipe(take(1));
  }

  private update(diagnostico: DiagnosticoDTO) {
    return this.http.put(`${this.API}/${diagnostico.iddiagnostico}`, diagnostico).pipe(take(1));
  }

  save(diagnostico: DiagnosticoDTO) {
    if (diagnostico.iddiagnostico) {
      return this.update(diagnostico);
    }
    return this.create(diagnostico);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
