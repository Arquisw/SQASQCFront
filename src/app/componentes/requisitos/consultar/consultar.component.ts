import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { alert } from 'src/app/navbar/alert/alert';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { OperacionService } from 'src/app/servicio/operacion/operacion.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit{

  paginaActual:number = 1;
  acceso : boolean = false;
  requisitos:RequisitoInterface[]=[];
  operaciones:operacionInterface[]=[];
  calificado: number = 0 ;

  projectId =sessionStorage.getItem(constantes.PROJECT_ID);
  
  
  constructor(private requisitoService: RequisitosService, private alert: alert){}
  
  ngOnInit(): void {    
    this.requisitoService.getRequerimiento2(parseInt(this.projectId!)).subscribe(requisitos => this.requisitos = requisitos);      
  }

  validarCalificacion() { 
    for(let i = 0 ; i < this.requisitos.length; i++){
      if(this.requisitos[i].qualified){
        this.calificado++;
      }
    }
    if(this.calificado==this.requisitos.length){
      window.sessionStorage.setItem('sqa',new Boolean(true).toString())
      this.requisitoService.actualizarEstado(parseInt(this.projectId!))
      this.alert.successReload(constantes.SW_BIEN_HECHO,constantes.FIN_EXITOSO);
    } else{
      this.alert.infoReload(constantes.SW_INFO,constantes.FIN_PENDIENTE);
    }    
  }
}
