import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImagemDTO } from '../DTOs/imagem-dto';
import { imagemInsertDTO } from '../DTOs/imagem-insert-dto';

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

  create(file: Blob) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ImagemDTO>(this.API, formData);
  }

  update(imagem: ImagemDTO) {
    return this.http.put(`${this.API}/${imagem.idimagem}`, imagem).pipe(take(1));
  }

  save(imagem: ImagemDTO) {
    if (imagem.idimagem) {
      // return this.update(imagem);
    }
    // return this.create(imagem);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
