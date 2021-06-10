import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthorizationEntradaDTO } from '../DTOs/authorizationentrada-dto';
import { AuthorizationSaidaDTO } from '../DTOs/authorizationsaida-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.API}authentication`;

  constructor(private http: HttpClient) {}

  login(login: AuthorizationEntradaDTO) {
    return this.http.post<AuthorizationSaidaDTO>(this.API, login);
  }
}
