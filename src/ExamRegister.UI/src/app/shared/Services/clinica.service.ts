import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ClinicaDTO } from '../DTOs/clinica-dto';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private readonly API = `${environment.API}clinica`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<ClinicaDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ClinicaDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(clinica: ClinicaDTO) {
    return this.http.post(this.API, clinica).pipe(take(1));
  }

  private update(clinica: ClinicaDTO) {
    return this.http.put(`${this.API}/${clinica.idclinica}`, clinica).pipe(take(1));
  }

  save(clinica: ClinicaDTO) {
    if (clinica.idclinica) {
      return this.update(clinica);
    }
    return this.create(clinica);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}