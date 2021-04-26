import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExamediagDTO } from '../DTOs/examediag-dto';

@Injectable({
  providedIn: 'root'
})
export class ExamediagService {
  private readonly API = `${environment.API}examediag`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ExamediagDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ExamediagDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(examediag: ExamediagDTO) {
    return this.http.post(this.API, examediag).pipe(take(1));
  }

  private update(examediag: ExamediagDTO) {
    return this.http.put(`${this.API}/${examediag.idexamediag}`, examediag).pipe(take(1));
  }

  save(examediag: ExamediagDTO) {
    if (examediag.idexamediag) {
      return this.update(examediag);
    }
    return this.create(examediag);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
