import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Paginacao } from '../shared/DTOs/Paginacao';
import { UsuarioDTO } from '../shared/DTOs/usuario-dto';
import { AlertModalService } from '../shared/Services/alert-modal.service';
import { UsuarioService } from '../shared/Services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Output() public paginaChange = new EventEmitter<number>();
  pagina: number = 0;
  pageSize: number = 5;

  pesquisa: string = "";
  temPesquisa: boolean = false;

  usuarios?: Paginacao<UsuarioDTO>;
  usuarioSelecionado!: UsuarioDTO;

  constructor(
    private usuarioservice: UsuarioService,
    private alertService: AlertModalService,
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.onList(1);
  }

  ngOnInit() {
    sessionStorage.removeItem("clinica");
    sessionStorage.removeItem("diagnostico");
    sessionStorage.removeItem("exame");
    sessionStorage.removeItem("categoria");
    sessionStorage.removeItem("medicoSalvo");
    sessionStorage.removeItem("orgao");
    sessionStorage.removeItem("paciente");
    sessionStorage.removeItem("peca");
    sessionStorage.removeItem("reuniao");
    sessionStorage.removeItem("novoUsuario");
    sessionStorage.removeItem("informacao");
    sessionStorage.removeItem("grupo");
  }

  usuariosCount(): number {
    return this.usuarios?.count ?? 0;
  }

  onList($event: any) {
    this.pagina = $event;
    this.usuarioservice.list((this.pagina - 1) * this.pageSize, this.pageSize, true, false, this.pesquisa).subscribe(usuarios => {
      this.usuarios = usuarios;
    });
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

  reload() {
    location.reload();
  }
  
  onPesquisar() {
    this.onList(1);
    this.temPesquisa = true;
  }

}
