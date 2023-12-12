import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { ErrorInterface } from 'src/app/interfaces/error';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }  

  getCaracteristicaById(id:string):Promise<CaracteristicaInterface[]>{
    return firstValueFrom(this.http.get<CaracteristicaInterface[]>(`http://localhost:8080/characteristics/characteristics-requirement/${id}`));
  } 

  updateGrade(idReq:number,idCar:number,grade:number):Promise<Number>{
    return firstValueFrom(this.http.post<Number>(`http://localhost:8080/characteristics/update-grade/${idReq}/${idCar}`,grade));
  }

  updateError(idReq:number,idCar:number,error:ErrorInterface):Promise<ErrorInterface>{
    return firstValueFrom(this.http.post<ErrorInterface>(`http://localhost:8080/characteristics/update-type-error/${idReq}/${idCar}`,error));
  }
  
  
}
