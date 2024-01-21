import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
import { operacionRangoInterface } from 'src/app/interfaces/operacion';
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

  numeroRequisitos !: number;

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
        ({id}) => this.operacionService!.obtenerPromedioPorRequisito("NO Funcional","1")
        )
    ).subscribe(resp => this.promedioPonderadoNoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerPromedioPorRequisito("Funcional","1")
        )
    ).subscribe(resp => this.promedioPonderadoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyecto("1")
        )
    ).subscribe(resp => this.mediaProyecto=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos("","1")
        )
    ).subscribe(resp => this.totalReq=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos("NO Funcional","1")
        )
    ).subscribe(resp => this.totalReqNoFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerCantidadRequisitos("Funcional","1")
        )
    ).subscribe(resp => this.totalReqFuncional=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.operacionService!.obtenerMediaProyectoAlta("1")
        )
    ).subscribe(resp => this.mediaProyectoAlto=resp);
        
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


    
    
  }

}
