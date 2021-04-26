import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MedicogrupoDTO } from '../DTOs/medicogrupo-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicogrupoService {
  private readonly API = `${environment.API}medicogrupo`;

  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<MedicogrupoDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<MedicogrupoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(medicogrupo: MedicogrupoDTO) {
    return this.http.post(this.API, medicogrupo).pipe(take(1));
  }

  private update(medicogrupo: MedicogrupoDTO) {
    return this.http.put(`${this.API}/${medicogrupo.idgrupomedico}`, medicogrupo).pipe(take(1));
  }

  save(medicogrupo: MedicogrupoDTO) {
    if (medicogrupo.idgrupomedico) {
      return this.update(medicogrupo);
    }
    return this.create(medicogrupo);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
