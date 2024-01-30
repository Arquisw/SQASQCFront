import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { OperacionService } from 'src/app/servicio/operacion/operacion.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';
import { constantes } from '../constantes/constantes';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/servicio/usuario/usuario.service';
import { PersonaResumen } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  restriccion : boolean = false;
  registrar : boolean = true;
  usuarioActualId = 0;
  authorities: string[] = [];
  usuario!: PersonaResumen;

  constructor(private userService: UsuarioService){  
    this.restriccion = (localStorage.getItem('visibilidad') == 'true') ? true : false
  }
  ngOnInit(): void {
    this.inicializarParametrosDelToken();
    this.consultarUsuario();
  }

  inicializarParametrosDelToken(): void {
    const token = window.sessionStorage.getItem('Authorization');
    const tokenPayload = JSON.parse(atob(token!.split('.')[1]));

    this.usuarioActualId = tokenPayload.id;
    this.authorities = tokenPayload.authorities.split(',');
  }

  consultarUsuario(): void{  
    this.userService.consultarPersonaPorId(this.usuarioActualId).then(resp => {this.usuario=resp}) 
  }

  redirigirProyecto(){
    window.location.href = 'http://localhost:4200/proyecto/';
  }
  redirigirPresentacion(){
    window.location.href = 'http://localhost:4200/presentacion/';
  }
  redirigirFundamento(){
    window.location.href = 'http://localhost:4200/fundamentos/';
  }
  redirigirResponsable(){
    window.location.href = 'http://localhost:4200/responsables/';
  }

  

}
