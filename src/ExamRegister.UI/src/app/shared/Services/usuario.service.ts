import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { environment } from 'src/environments/environment';
import { Paginacao } from '../DTOs/Paginacao';
import { UsuarioDTO } from '../DTOs/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuario`;

  constructor(private http: HttpClient) { }

  list(skip: number, top: number, count: boolean, soinativo?: boolean, pesquisa?: string) {
    return this.http.get<Paginacao<UsuarioDTO>>(
      this.API +
      "?skip=" + skip +
      "&top=" + top +
      "&count=" + count +
      "&soinativo=" + soinativo +
      "&pesquisa=" + pesquisa
    ).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<UsuarioDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(usuario: UsuarioDTO) {
    return this.http.post(this.API, usuario).pipe(take(1));
  }

  private update(usuario: UsuarioDTO) {
    return this.http.put(`${this.API}/${usuario.idusuario}`, usuario).pipe(take(1));
  }

  save(usuario: UsuarioDTO) {
    if (usuario.idusuario) {
      return this.update(usuario);
    }
    return this.create(usuario);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
