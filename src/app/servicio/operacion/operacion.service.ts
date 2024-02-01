import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { operacionInterface, operacionRangoInterface } from 'src/app/interfaces/operacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  obtenerOperaciones(){
    return firstValueFrom(this.http.get<operacionInterface[]>(`${this.url}/operations`));
  }  

  obtenerMediaProyecto(tipoRequisito:string,idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`${this.url}/operations/calculate-median?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }  
  
  actualizarOperaciones(id:number):Promise<operacionInterface>{
    return firstValueFrom(this.http.put<operacionInterface>(`${this.url}/operations/update-operation/${id}`,""));
  }

  obtenerMediaProyectoAlta(tipoRequisito:string,idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`${this.url}/operations/weighted-average-upper-range?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerCantidadRequisitos(tipoRequisito:string, idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`${this.url}/operations/count-number-score-by-project-id-or-type-requirement?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerPromedioRequisitos(tipoRequisito:string, idProject:string):Promise<operacionRangoInterface>{
    return firstValueFrom(this.http.get<operacionRangoInterface>(`${this.url}/operations/average-total-requirements-evaluated-by-level-adecuacy?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerCantidadRequisitosTotal(tipoRequisito:string, idProject:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/requirements/count-all-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  obtenerMediaTotal(tipoRequisito:string, idProject:string, grafica:number):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/operations/total-weighted-median?typeRequirement=${tipoRequisito}&projectId=${idProject}&graphicNumber=${grafica}`));
  } 

  obtenerPromedioPonderado(tipoRequisito:string, idProject:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/operations/weighted-average-level-adequacy?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 
}
