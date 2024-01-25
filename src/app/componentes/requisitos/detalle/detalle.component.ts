import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { constantes } from 'src/app/navbar/constantes/constantes';
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

  operaciones !: operacionInterface;
  titulos : Array<string> = [];

  errorMCC : number =0;
  errorEIE : number =0;

  requisitos:RequisitoInterface[]=[];
  req !: RequisitoInterface ;
  
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

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerOperacionError(constantes.EIE,id)       
        )
    ).subscribe(resp => this.errorEIE=resp) 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerOperacionError(constantes.MCC,id)       
        )
    ).subscribe(resp => this.errorMCC=resp) 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerCantidadEIE(id)     
        )
    ).subscribe(resp => this.errorEIE=resp) 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerCantidadMCC(id)     
        )
    ).subscribe(resp => this.errorMCC=resp) 
    
  }
}
