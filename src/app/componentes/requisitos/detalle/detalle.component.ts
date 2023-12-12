import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';




@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})



export class DetalleComponent {

  valor : boolean = true;

  caracteristicas :CaracteristicaInterface[] = [
  ];

  

  operaciones : Array<number> = [];
  
  titulos : Array<string> = [];
  
  

  requisitos:RequisitoInterface[]=[];
  req : RequisitoInterface = {
    requirementId:1,
    projectId:1,
    name: '',
    description: '',
    typeRequirement : ''
  }
  
  constructor(private requisitoService: RequisitosService, private activatedRoute?:ActivatedRoute, private caracteristicaService?: CaracteristicaService){}
  
  ngOnInit(): void {  

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCaracteristicaById(id)
        )
    ).subscribe(resp => this.caracteristicas=resp)    
    

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.getRequerimientoById(id)
        )
    ).subscribe(resp => this.req=resp)  

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerOperaciones(id)
       
        )
    ).subscribe(resp => this.operaciones=resp) 
    
  }

  

  calcularOperaciones(){    
 
    this.titulos = [
      "Level adecuacy:" + this.operaciones[0].toFixed(2),
      "evaluatedCharacteristics:" + this.operaciones[1].toFixed(2),
      "levelWeightScore:" + this.operaciones[2].toFixed(2),
      "maximunScore:"+ this.operaciones[3].toFixed(2),
      "calculateWeightAverage:"+ this.operaciones[4].toFixed(2),
    ]  
    
  }

}
