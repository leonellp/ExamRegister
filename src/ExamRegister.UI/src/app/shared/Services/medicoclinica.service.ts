import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MedicoclinicaDTO } from '../DTOs/medicoclinica-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoclinicaService {
  private readonly API = `${environment.API}medicoclinica`;

  constructor(private http: HttpClient) { }
  
  list(idmedico: string) {
    return this.http.get<MedicoclinicaDTO[]>(this.API + "?idmedico=" + idmedico).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<MedicoclinicaDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(medicoclinica: MedicoclinicaDTO) {
    return this.http.post(this.API, medicoclinica).pipe(take(1));
  }

  private update(medicoclinica: MedicoclinicaDTO) {
    return this.http.put(`${this.API}/${medicoclinica.idmedcli}`, medicoclinica).pipe(take(1));
  }

  save(medicoclinica: MedicoclinicaDTO) {
    if (medicoclinica.idmedcli) {
      return this.update(medicoclinica);
    }
    return this.create(medicoclinica);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
