import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequisitoInterface } from '../../interfaces/requisito';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { operacionInterface, operacionRangoInterface } from 'src/app/interfaces/operacion';
import { tipoConsultoria } from 'src/app/interfaces/proyecto';


@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  private url:string = environment.url

  constructor(private http: HttpClient) { }

  getRequerimiento1(idProyecto: number){
   // return this.http.get<RequisitoInterface[]>(`${this.url}/requirements?projectId=${idProyecto}`).pipe(catchError(this.errorHandler));
   return firstValueFrom(this.http.get<RequisitoInterface[]>(`${this.url}/requirements?projectId=${idProyecto}`));
  }

  getRequerimiento2(idProyecto: number){
    return this.http.get<RequisitoInterface[]>(`${this.url}/requirements?projectId=${idProyecto}`).pipe(catchError(this.errorHandler));
    
   }

  agregarRequerimiento(requisito:RequisitoInterface):Promise<RequisitoInterface>{
    return firstValueFrom(this.http.post<RequisitoInterface>(`${this.url}/requirements`,requisito));
  }

  getRequerimientoById(id:string):Promise<RequisitoInterface>{
    return firstValueFrom(this.http.get<RequisitoInterface>(`${this.url}/requirements/${id}`));
  }

  actualizarRequerimiento(requisito:RequisitoInterface):Promise<RequisitoInterface>{
    return firstValueFrom(this.http.put<RequisitoInterface>(`${this.url}/requirements${requisito.requirementId}`,requisito));
  }

  obtenerOperaciones(id:number):Promise<operacionInterface>{
    return firstValueFrom(this.http.get<operacionInterface>(`${this.url}/characteristics/all-operations/${id}`));
  }
  

  obtenerOperacionError(idError:string,idReq:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/type-errors/${idError}/${idReq}`));
  } 

  obtenerCantidadEIE(idReq:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/type-errors/eie/${idReq}`));
  }
  
  obtenerCantidadMCC(idReq:string):Promise<number>{
    return firstValueFrom(this.http.get<number>(`${this.url}/type-errors/mcc/${idReq}`));
  }

  obtenerTipoConsultoria(idReq:string):Observable<tipoConsultoria>{
    return this.http.get<tipoConsultoria>(`${this.url}/requirements/get-type-consulting?projectId=${idReq}`);
  }

  actualizarCalificado(idReq:number){
    return firstValueFrom(this.http.put(`${this.url}/requirements/update-requirement-qualified?requirementId=${idReq}`,""));
  }

  actualizarEstado(idProyecto:number){
    return firstValueFrom(this.http.put(`${this.url}/requirements/update-project-status?projectId=${idProyecto}`,""));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message);
  }
}
