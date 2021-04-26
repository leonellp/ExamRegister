import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HistoricopacienteDTO } from '../DTOs/historicopaciente-dto';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private readonly API = `${environment.API}historicopaciente`;

  constructor(private http: HttpClient) { }

  list(idpaciente: string, soinativo: boolean) {
    return this.http.get<HistoricopacienteDTO[]>(this.API + "?idpaciente=" + idpaciente + "&inativo=" + soinativo).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<HistoricopacienteDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(historicopaciente: HistoricopacienteDTO) {
    return this.http.post(this.API, historicopaciente).pipe(take(1));
  }

  private update(historicopaciente: HistoricopacienteDTO) {
    return this.http.put(`${this.API}/${historicopaciente.idhispaciente}`, historicopaciente).pipe(take(1));
  }

  save(historicopaciente: HistoricopacienteDTO) {
    if (historicopaciente.idhispaciente) {
      return this.update(historicopaciente);
    }
    return this.create(historicopaciente);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
