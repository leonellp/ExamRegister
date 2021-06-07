import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../DTOs/login-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.API}authentication`;

  constructor(private http: HttpClient) {}

  login(login: LoginDTO) {
    return this.http.post(this.API, login, { responseType: 'text' });
  }
}
