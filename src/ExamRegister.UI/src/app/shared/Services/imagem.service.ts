import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImagemDTO } from '../DTOs/imagem-dto';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  private readonly API = `${environment.API}imagem`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ImagemDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ImagemDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(imagem: ImagemDTO) {
    return this.http.post(this.API, imagem).pipe(take(1));
  }

  private update(imagem: ImagemDTO) {
    return this.http.put(`${this.API}/${imagem.idimagem}`, imagem).pipe(take(1));
  }

  save(imagem: ImagemDTO) {
    if (imagem.idimagem) {
      return this.update(imagem);
    }
    return this.create(imagem);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
