import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { OperacionService } from 'src/app/servicio/operacion/operacion.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';
import { constantes } from '../constantes/constantes';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/servicio/usuario/usuario.service';
import { PersonaResumen } from 'src/app/interfaces/usuario';
import { tipoConsultoria } from 'src/app/interfaces/proyecto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  sqc: boolean = false;
  sqa: boolean = false;
  requisitos : boolean = false;
  usuarioActualId = 0;
  authorities: string[] = [];
  usuario!: PersonaResumen;

  constructor(private userService: UsuarioService){  
    this.requisitos = (sessionStorage.getItem('requisitos') == 'true') ? true : false
    this.sqc = (sessionStorage.getItem('sqc') == 'true') ? true : false    
    this.sqa = (sessionStorage.getItem('sqa') == 'true') ? true : false
  }
  ngOnInit(): void {
    this.inicializarParametrosDelToken();
    this.consultarUsuario();          
  }

  inicializarParametrosDelToken(): void {
    const token = window.sessionStorage.getItem('Authorization');
    if(token !== null && token !== undefined) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
 
      this.usuarioActualId = tokenPayload.id;
      this.authorities = tokenPayload.authorities.split(',');
    }
  }

  consultarUsuario(): void{  
    this.userService.consultarPersonaPorId(this.usuarioActualId).then(resp => {this.usuario=resp}) 
  }

  redirigirProyecto(){
    window.location.href = 'http://localhost:4200/proyectos/';
  }
  redirigirPresentacion(){
    window.location.href = 'http://localhost:4200/presentacion/';
  }
  redirigirFundamento(){
    window.location.href = 'http://localhost:4200/fundamentacion/';
  }
  redirigirResponsable(){
    window.location.href = 'http://localhost:4200/acerca-de-nosotros/';
  }

  cerrarSesion(){
    window.sessionStorage.removeItem('Authorization');
    window.sessionStorage.removeItem('requisitos');
    window.sessionStorage.removeItem('sqa');
    window.sessionStorage.removeItem('sqc');
    window.location.href = 'http://localhost:4200/inicio/';
  }

}
