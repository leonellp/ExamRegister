import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaDTO } from '../DTOs/categoria-dto';
import { take } from 'rxjs/operators';
import { Paginacao } from '../DTOs/Paginacao';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = `${environment.API}categoria`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string, idcategoriapai?: string) {
    return this.http.get<Paginacao<CategoriaDTO>>(
      this.API + 
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa + 
      "&idcategoriapai=" + idcategoriapai
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<CategoriaDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(categoria: CategoriaDTO) {
    return this.http.post(this.API, categoria).pipe(take(1));
  }

  private update(categoria: CategoriaDTO) {
    return this.http.put(`${this.API}/${categoria.idcategoria}`, categoria).pipe(take(1));
  }

  save(categoria: CategoriaDTO) {
    if (categoria.idcategoria) {
      return this.update(categoria);
    }
    return this.create(categoria);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
