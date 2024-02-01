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

  projectId = sessionStorage.getItem(constantes.PROJECT_ID);

  caracteristicas: CaracteristicaInterface[] = []

  constructor(private operacionService: OperacionService ,private activatedRoute?:ActivatedRoute) {}
  ngOnInit(): void {
    this.operacionService.obtenerPromedioRequisitos(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.promedioPonderadoNoFuncional=resp})        
    this.operacionService.obtenerPromedioRequisitos(constantes.FUNCIONAL,this.projectId!).then(resp => {this.promedioPonderadoFuncional=resp})
    this.operacionService.obtenerMediaProyecto(constantes.VACIO,this.projectId!).then(resp => {this.mediaProyecto=resp})
    this.operacionService.obtenerMediaProyecto(constantes.FUNCIONAL,this.projectId!).then(resp => {this.mediaProyectoFuncional=resp}) 
    this.operacionService.obtenerMediaProyecto(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.mediaProyectoNoFuncional=resp}) 
    this.operacionService.obtenerCantidadRequisitos(constantes.VACIO,this.projectId!).then(resp => {this.totalReq=resp})
    this.operacionService.obtenerCantidadRequisitos(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.totalReqNoFuncional=resp})
    this.operacionService.obtenerCantidadRequisitos(constantes.FUNCIONAL,this.projectId!).then(resp => {this.totalReqFuncional=resp})
    this.operacionService.obtenerMediaProyectoAlta(constantes.VACIO,this.projectId!).then(resp => {this.mediaProyectoAlto=resp})
    this.operacionService.obtenerMediaProyectoAlta(constantes.FUNCIONAL,this.projectId!).then(resp => {this.mediaProyectoAltoFuncional=resp})
    this.operacionService.obtenerMediaProyectoAlta(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.mediaProyectoAltoNoFuncional=resp})
    this.operacionService.obtenerPromedioRequisitos(constantes.VACIO,this.projectId!).then(resp => {this.promedioTodosReq=resp})
    this.operacionService.obtenerCantidadRequisitosTotal(constantes.VACIO,this.projectId!).then(resp => {this.numeroRequisitos=resp}) 
    this.operacionService.obtenerCantidadRequisitosTotal(constantes.FUNCIONAL,this.projectId!).then(resp => {this.numeroRequisitosFuncionales=resp})  
    this.operacionService.obtenerCantidadRequisitosTotal(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.numeroRequisitosNoFuncionales=resp}) 
    this.operacionService.obtenerMediaTotal(constantes.VACIO,this.projectId!,0).then(resp => {this.mediaTotal=resp}) 
    this.operacionService.obtenerMediaTotal(constantes.VACIO,this.projectId!,1).then(resp => {this.mediaTotalAlta=resp}) 
    this.operacionService.obtenerMediaTotal(constantes.VACIO,this.projectId!,2).then(resp => {this.mediaTotalBaja=resp})
    this.operacionService.obtenerMediaTotal(constantes.FUNCIONAL,this.projectId!,0).then(resp => {this.mediaTotalFuncional=resp})

    this.operacionService.obtenerPromedioPonderado(constantes.FUNCIONAL,this.projectId!).then(resp => {this.mediaTotalAltaFuncional=resp})

    this.operacionService.obtenerMediaTotal(constantes.NO_FUNCIONAL,this.projectId!,0).then(resp => {this.mediaTotalNoFuncional=resp})

    this.operacionService.obtenerPromedioPonderado(constantes.NO_FUNCIONAL,this.projectId!).then(resp => {this.mediaTotalAltaNoFuncional=resp})

    
  }


  guardar() {
    console.log(this.numeroRequisitos, this.numeroRequisitosFuncionales, this.numeroRequisitosNoFuncionales);
  }
}
