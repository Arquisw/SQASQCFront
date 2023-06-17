import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequisitoInterface } from '../../interfaces/requisito';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  private url:string = environment.url2

  constructor(private http: HttpClient) { }

  getRequerimiento(){
    return this.http.get<RequisitoInterface[]>(`${this.url}/requisitos`)
                    .pipe(catchError(this.errorHandler));
  }

  agregarRequerimiento(requisito:RequisitoInterface):Observable<RequisitoInterface>{
    return this.http.post<RequisitoInterface>(`${this.url}/requisitos`,requisito);
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message);
  }
}