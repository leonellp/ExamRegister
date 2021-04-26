import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PacienteDTO } from '../DTOs/paciente-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API = `${environment.API}paciente`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<PacienteDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<PacienteDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(paciente: PacienteDTO) {
    return this.http.post(this.API, paciente).pipe(take(1));
  }

  private update(paciente: PacienteDTO) {
    return this.http.put(`${this.API}/${paciente.idpaciente}`, paciente).pipe(take(1));
  }

  save(paciente: PacienteDTO) {
    if (paciente.idpaciente) {
      return this.update(paciente);
    }
    return this.create(paciente);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
