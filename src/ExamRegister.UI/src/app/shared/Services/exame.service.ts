import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExameDTO } from '../DTOs/exame-dto';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  private readonly API = `${environment.API}exame`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ExameDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ExameDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(exame: ExameDTO) {
    return this.http.post(this.API, exame).pipe(take(1));
  }

  private update(exame: ExameDTO) {
    return this.http.put(`${this.API}/${exame.idexame}`, exame).pipe(take(1));
  }

  save(exame: ExameDTO) {
    if (exame.idexame) {
      return this.update(exame);
    }
    return this.create(exame);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
