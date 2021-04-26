import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../DTOs/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuario`;

  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<UsuarioDTO[]>(this.API).pipe(take(1));
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
