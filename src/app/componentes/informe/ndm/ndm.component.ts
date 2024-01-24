import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
import { operacionRangoInterface } from 'src/app/interfaces/operacion';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';
import { OperacionService } from 'src/app/servicio/operacion/operacion.service';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-ndm',
  templateUrl: './ndm.component.html',
  styleUrls: ['./ndm.component.css']
})
export class NdmComponent {

  promedioPonderadoFuncional !: operacionRangoInterface;  
  promedioPonderadoNoFuncional !: operacionRangoInterface;

  totalReq !: operacionRangoInterface;
  totalReqNoFuncional!: operacionRangoInterface;
  totalReqFuncional!: operacionRangoInterface;

  promedioTodosReq !: operacionRangoInterface;

  mediaProyecto!: operacionRangoInterface;
  mediaProyectoAlto !: operacionRangoInterface;

  mediaProyectoFuncional!: operacionRangoInterface;
  mediaProyectoAltoFuncional !: operacionRangoInterface;

  
  mediaProyectoNoFuncional!: operacionRangoInterface;
  mediaProyectoAltoNoFuncional !: operacionRangoInterface;

  numeroRequisitos !: number;
  numeroRequisitosFuncionales !: number;
  numeroRequisitosNoFuncionales !: number;

  mediaTotal !: number;
  mediaTotalAlta !: number;
  mediaTotalBaja !: number; 

  mediaTotalFuncional !: number;
  mediaTotalAltaFuncional !: number;
  mediaTotalBajaFuncional !: number;

  mediaTotalNoFuncional !: number;
  mediaTotalAltaNoFuncional !: number;
  mediaTotalBajaNoFuncional !: number;

  caracteristicas: CaracteristicaInterface[] = []

  constructor(private requisitoService: RequisitosService,private caracteristicaService?: CaracteristicaService, private operacionService?: OperacionService ,private activatedRoute?:ActivatedRoute) {}
  ngOnInit(): void {    
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCaracteristicaById("1")
        )
    ).subscribe(resp => this.caracteristicas=resp);    

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerPromedioRequisitos(constantes.NO_FUNCIONAL,"1")
        )
    ).subscribe(resp => this.promedioPonderadoNoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerPromedioRequisitos(constantes.FUNCIONAL,"1")
        )
    ).subscribe(resp => this.promedioPonderadoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyecto("","1")
        )
    ).subscribe(resp => this.mediaProyecto=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyecto(constantes.FUNCIONAL,"1")
        )
    ).subscribe(resp => this.mediaProyectoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyecto(constantes.NO_FUNCIONAL,"1")
        )
    ).subscribe(resp => this.mediaProyectoNoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos("","1")
        )
    ).subscribe(resp => this.totalReq=resp);
    

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos(constantes.NO_FUNCIONAL,"1")
        )
    ).subscribe(resp => this.totalReqNoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos(constantes.FUNCIONAL,"1")
        )
    ).subscribe(resp => this.totalReqFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyectoAlta("","1")
        )
    ).subscribe(resp => this.mediaProyectoAlto=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyectoAlta(constantes.FUNCIONAL,"1")
        )
    ).subscribe(resp => this.mediaProyectoAltoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyectoAlta(constantes.NO_FUNCIONAL,"1")
        )
    ).subscribe(resp => this.mediaProyectoAltoNoFuncional=resp);
        
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerPromedioRequisitos("","1")
        )
    ).subscribe(resp => this.promedioTodosReq=resp);  
    
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitosTotal("","1")
        )
    ).subscribe(resp => this.numeroRequisitos=resp);   

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitosTotal(constantes.FUNCIONAL,"1")
        )
    ).subscribe(resp => this.numeroRequisitosFuncionales=resp);   


    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitosTotal(constantes.NO_FUNCIONAL,"1")
        )
    ).subscribe(resp => this.numeroRequisitosNoFuncionales=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal("","1",0)
        )
    ).subscribe(resp => this.mediaTotal=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal("","1",1)
        )
    ).subscribe(resp => this.mediaTotalAlta=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal("","1",2)
        )
    ).subscribe(resp => this.mediaTotalBaja=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.FUNCIONAL,"1",0)
        )
    ).subscribe(resp => this.mediaTotalFuncional=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.FUNCIONAL,"1",1)
        )
    ).subscribe(resp => this.mediaTotalAltaFuncional=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.FUNCIONAL,"1",2)
        )
    ).subscribe(resp => this.mediaTotalBajaFuncional=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.NO_FUNCIONAL,"1",0)
        )
    ).subscribe(resp => this.mediaTotalNoFuncional=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.NO_FUNCIONAL,"1",1)
        )
    ).subscribe(resp => this.mediaTotalAltaNoFuncional=resp); 

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaTotal(constantes.NO_FUNCIONAL,"1",2)
        )
    ).subscribe(resp => this.mediaTotalBajaNoFuncional=resp); 
    
  }


  guardar() {
    console.log(this.numeroRequisitos, this.numeroRequisitosFuncionales, this.numeroRequisitosNoFuncionales);
  }
}
