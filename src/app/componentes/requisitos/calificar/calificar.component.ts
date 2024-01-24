import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';
import { alert } from 'src/app/navbar/alert/alert'
import { ErrorInterface } from 'src/app/interfaces/error';
import { waitForAsync } from '@angular/core/testing';
import { operacionInterface } from 'src/app/interfaces/operacion';
import { OperacionService } from 'src/app/servicio/operacion/operacion.service';
import { constantes } from 'src/app/navbar/constantes/constantes';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent {

  mensajeError="";
  formularioValido=true;  
  errorValido=true;
  error : ErrorInterface = 
    {
      "dde":false,
      "dii":false,
      "var":false
    }
  
  operaciones !: operacionInterface;

  caracteristicas: CaracteristicaInterface[] = []

  textoDeInput: string = '';

  nota:number= 0;

  requisitos:RequisitoInterface[]=[];
  req : RequisitoInterface = {
    projectId : 1,
    name: '',
    description: '',
    typeRequirement : ''

  } 

  constructor(private requisitoService: RequisitosService, private operacionService: OperacionService,private alert: alert, private activatedRoute?:ActivatedRoute, private caracteristicaService?: CaracteristicaService ){}

  ngOnInit(): void {     
    
    this.activatedRoute?.params.
    pipe(
      switchMap( ({id}) => this.requisitoService.getRequerimientoById(id))
    ).
    subscribe( resp => this.req=resp);   

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCaracteristicaById(id)
        )
    ).subscribe(resp => this.caracteristicas=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.requisitoService!.obtenerOperaciones(id)
        )
    ).subscribe(resp => this.operaciones=resp);
  } 

  calificar():void{
    this.formularioValido=true;
    this.errorValido=true;
    for (let i = 0; i < this.caracteristicas.length; i++) {
      if(this.caracteristicas[i].gradeCharacteristic<=0 || this.caracteristicas[i].gradeCharacteristic>9 || this.caracteristicas[i].gradeCharacteristic == null){        
        this.formularioValido=false;
      }
      else if(this.caracteristicas[i].gradeCharacteristic!= 9 && (this.caracteristicas[i].dde==false && this.caracteristicas[i].dii==false && this.caracteristicas[i].var==false)){        
        this.errorValido=false;
      }
    }
    if(this.formularioValido!=true){
      this.alert.error(constantes.SW_LO_SENTIMOS,constantes.SW_ERROR_NOTA);
    }else if (this.errorValido!=true){  
      this.alert.error(constantes.SW_LO_SENTIMOS,constantes.SW_ERROR_TIPO_ERROR);    
    }else{  
      for (let i = 0; i < this.caracteristicas.length; i++){ 
        if(this.caracteristicas[i].gradeCharacteristic>8){
          this.error.dde=false;
          this.error.dii=false;
          this.error.var=false;
        }else{
          this.error.dde=this.caracteristicas[i].dde;
          this.error.dii=this.caracteristicas[i].dii;
          this.error.var=this.caracteristicas[i].var; 
        }         
        this.caracteristicaService?.updateGrade(this.req.requirementId!,this.caracteristicas[i].idCharacteristic!,this.caracteristicas[i].gradeCharacteristic);
        this.caracteristicaService?.updateError(this.req.requirementId!,this.caracteristicas[i].idCharacteristic!,this.error);
      } 
      this.operacionService.actualizarOperaciones(this.req.requirementId!,this.operaciones);
      this.alert.successTimer(constantes.SW_BIEN_HECHO,constantes.SW_CALIFICACION_EXITOSA); 
    }  
  }
  


}
