import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
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
  req : RequisitoInterface = {
    projectId:1,
    name: '',
    description: '',
    typeRequirement : ''

  }
  
  constructor(private requisitoService: RequisitosService, private activatedRoute?:ActivatedRoute){}
  
  ngOnInit(): void {    
    this.requisitoService.getRequerimiento(this.req.projectId).
    subscribe(requisitos => this.requisitos = requisitos);
  }

  

}
