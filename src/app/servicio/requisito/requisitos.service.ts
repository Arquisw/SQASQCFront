import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequisitoInterface } from '../../interfaces/requisito';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { operacionInterface } from 'src/app/interfaces/operacion';


@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  private url:string = environment.url2

  constructor(private http: HttpClient) { }

  getRequerimiento(){
    return this.http.get<RequisitoInterface[]>(`${this.url}/requirements`).pipe(catchError(this.errorHandler));
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

  obtenerOperaciones(id:string):Promise<number[]>{
    return firstValueFrom(this.http.get<number[]>(`http://localhost:8080/characteristics/all-operations/${id}`));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message);
  }
}
