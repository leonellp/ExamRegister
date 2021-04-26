import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PacienteinformacaoDTO } from '../DTOs/pacienteinformacao-dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteinformacaoService {
  private readonly API = `${environment.API}pacienteinformacao`;

  constructor(private http: HttpClient) { }
  
  list(idpaciente: string) {
    return this.http.get<PacienteinformacaoDTO[]>(this.API + "?idpaciente=" + idpaciente).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<PacienteinformacaoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(pacienteinformacao: PacienteinformacaoDTO) {
    return this.http.post(this.API, pacienteinformacao).pipe(take(1));
  }

  private update(pacienteinformacao: PacienteinformacaoDTO) {
    return this.http.put(`${this.API}/${pacienteinformacao.Idpacienteinformacao}`, pacienteinformacao).pipe(take(1));
  }

  save(pacienteinformacao: PacienteinformacaoDTO) {
    if (pacienteinformacao.Idpacienteinformacao) {
      return this.update(pacienteinformacao);
    }
    return this.create(pacienteinformacao);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
