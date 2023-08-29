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
  
  requisitos:RequisitoInterface[]=[];
  req : RequisitoInterface = {
    name: '',
    description: '',
    typeRequirement : ''

  }
  
  constructor(private requisitoService: RequisitosService, private activatedRoute?:ActivatedRoute){}
  
  ngOnInit(): void {    
    this.requisitoService.getRequerimiento().
    subscribe(requisitos => this.requisitos = requisitos);
  }

  

}
