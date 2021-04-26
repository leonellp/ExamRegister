import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap, take } from 'rxjs/operators';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { UsuarioService } from '../shared/Services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<UsuarioDTO[]>;
  usuarioSelecionado!: UsuarioDTO;

  constructor(
    private usuarioservice: UsuarioService,
    private alertService: AlertModalService,
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuarios = this.usuarioservice.list();

  }

  ngOnInit() {
    sessionStorage.removeItem("medicoSalvo");
  }

  onDelete(usuario: UsuarioDTO) {
    this.usuarioSelecionado = usuario;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse usuário?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(usuario.idusuario) : EMPTY)
      )
      .subscribe(
        result => {
          this.alertService.showAlertSuccess('Usuário removido com sucesso.');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover usuário. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(usuario: UsuarioDTO) {
    this.router.navigate(['editar', usuario.idusuario], { relativeTo: this.route });
  }

}
