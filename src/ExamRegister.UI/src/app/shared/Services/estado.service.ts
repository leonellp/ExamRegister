import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EstadoDTO } from '../DTOs/estado-dto';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private readonly API = `${environment.API}estado`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<EstadoDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<EstadoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(estado: EstadoDTO) {
    return this.http.post(this.API, estado).pipe(take(1));
  }

  private update(estado: EstadoDTO) {
    return this.http.put(`${this.API}/${estado.idestado}`, estado).pipe(take(1));
  }

  save(estado: EstadoDTO) {
    if (estado.idestado) {
      return this.update(estado);
    }
    return this.create(estado);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
