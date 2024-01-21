import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { InformeInterface } from 'src/app/interfaces/informe';
import { operacionInterface, operacionRangoInterface } from 'src/app/interfaces/operacion';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  constructor(private http: HttpClient) { }

  obtenerMediaProyecto(idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`http://localhost:8080/operations/calculate-median?&projectId=${idProject}`));
  }

  obtenerPromedioPorRequisito(tipoRequisito:string,idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`http://localhost:8080/operations/averageScoreByProjectIdOrTypeRequirement?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  
  actualizarOperaciones(id:number, operacion:operacionInterface):Promise<operacionInterface>{
    return firstValueFrom(this.http.put<operacionInterface>(`http://localhost:8080/operations/${id}`,operacion));
  }

  obtenerMediaProyectoAlta(idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`http://localhost:8080/operations/weighted-average-upper-range?projectId=${idProject}`));
  }

  obtenerCantidadRequisitos(tipoRequisito:string, idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`http://localhost:8080/operations/count-number-score-by-project-id-or-type-requirement?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerPromedioRequisitos(tipoRequisito:string, idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`http://localhost:8080/operations/average-total-requirements-evaluated-by-level-adecuacy?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerCantidadRequisitosTotal(tipoRequisito:string, idProject:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`http://localhost:8080/requirements/count-all-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  

  

}
