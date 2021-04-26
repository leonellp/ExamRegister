import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CidadeDTO } from '../DTOs/cidade-dto';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
    private readonly API = `${environment.API}cidade`;

  constructor(private http: HttpClient) { }

  list(idestado: string, inativo: boolean) {
    return this.http.get<CidadeDTO[]>(this.API + "?idestado=" + idestado + "&inativo=" + inativo).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<CidadeDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(cidade: CidadeDTO) {
    return this.http.post(this.API, cidade).pipe(take(1));
  }

  private update(cidade: CidadeDTO) {
    return this.http.put(`${this.API}/${cidade.idcidade}`, cidade).pipe(take(1));
  }

  save(cidade: CidadeDTO) {
    if (cidade.idcidade) {
      return this.update(cidade);
    }
    return this.create(cidade);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
