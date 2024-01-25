import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
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

  projectId =localStorage.getItem(constantes.PROJECT_ID);
  
  
  constructor(private requisitoService: RequisitosService,private operacionService: OperacionService, private activatedRoute?:ActivatedRoute){}
  
  ngOnInit(): void {    
    this.requisitoService.getRequerimiento(parseInt(this.projectId!)).
    subscribe(requisitos => this.requisitos = requisitos);
    
    this.operacionService.obtenerOperaciones().then(resp => {this.operaciones=resp}) 
  }

  mostrar() {  
    console.log(this.requisitos);
    console.log(this.operaciones);
  }
}
