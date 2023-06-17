import { Component, OnInit } from '@angular/core';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit{
  
  requisitos:RequisitoInterface[]=[];
  mensajeError="";
  
  constructor(private requisitoService: RequisitosService){}
  
  ngOnInit(): void {    
    this.requisitoService.getRequerimiento().
    subscribe(requisitos => this.requisitos = requisitos,
              error => this.mensajeError = error);
  }

}
