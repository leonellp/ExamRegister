import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EnderecoDTO } from '../DTOs/endereco-dto';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private readonly API = `${environment.API}endereco`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<EnderecoDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<EnderecoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(endereco: EnderecoDTO) {
    return this.http.post(this.API, endereco).pipe(take(1));
  }

  private update(endereco: EnderecoDTO) {
    return this.http.put(`${this.API}/${endereco.idendereco}`, endereco).pipe(take(1));
  }

  save(endereco: EnderecoDTO) {
    if (endereco.idendereco) {
      return this.update(endereco);
    }
    return this.create(endereco);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
