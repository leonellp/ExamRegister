import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoriaexameDTO } from '../DTOs/categoriaexame-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaexameService {

  private readonly API = `${environment.API}categoriaexame`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<CategoriaexameDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<CategoriaexameDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(categoriaexame: CategoriaexameDTO) {
    return this.http.post(this.API, categoriaexame).pipe(take(1));
  }

  private update(categoriaexame: CategoriaexameDTO) {
    return this.http.put(`${this.API}/${categoriaexame.idcategoriaexame}`, categoriaexame).pipe(take(1));
  }

  save(categoriaexame: CategoriaexameDTO) {
    if (categoriaexame.idcategoriaexame) {
      return this.update(categoriaexame);
    }
    return this.create(categoriaexame);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
