import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExamemedicorespdiagnosticoDTO } from '../DTOs/examemedicorespdiagnostico-dto';

@Injectable({
  providedIn: 'root'
})
export class ExamemedicorespdiagnosticoService {
  private readonly API = `${environment.API}examemedicorespdiagnostico`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ExamemedicorespdiagnosticoDTO[]>(this.API).pipe(take(1));
  }

  loadByID(id: string) {
    return this.http.get<ExamemedicorespdiagnosticoDTO>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(examemedicorespdiagnostico: ExamemedicorespdiagnosticoDTO) {
    return this.http.post(this.API, examemedicorespdiagnostico).pipe(take(1));
  }

  private update(examemedicorespdiagnostico: ExamemedicorespdiagnosticoDTO) {
    return this.http.put(`${this.API}/${examemedicorespdiagnostico.idexmeddiag}`, examemedicorespdiagnostico).pipe(take(1));
  }

  save(examemedicorespdiagnostico: ExamemedicorespdiagnosticoDTO) {
    if (examemedicorespdiagnostico.idexmeddiag) {
      return this.update(examemedicorespdiagnostico);
    }
    return this.create(examemedicorespdiagnostico);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
