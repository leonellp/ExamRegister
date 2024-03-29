import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuario = () => this.authService.usuario;
  public isMenuCollapsed = true;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  Logout() {
    this.authService.fazerLogout();
  }
}
