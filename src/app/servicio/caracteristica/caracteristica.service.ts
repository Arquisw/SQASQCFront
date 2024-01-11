import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { ErrorInterface } from 'src/app/interfaces/error';
import { InformeInterface } from 'src/app/interfaces/informe';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }  

  getCaracteristicaById(id:string):Promise<CaracteristicaInterface[]>{
    return firstValueFrom(this.http.get<CaracteristicaInterface[]>(`http://localhost:8080/characteristics/characteristics-requirement/${id}`));
  } 

  getAllCaracteristicaByIdAndName(nombre:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-type-requirement-name-characteristic?typeRequirement=${nombre}&projectId=${idProject}`));
  } 

  getAllPercentageByCaracteristica(nombre:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/calculate-percentage-of-name-characteristics?typeRequirement=${nombre}&projectId=${idProject}`));
  } 

  getAllCauseErrorDDE(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-dde?projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorDDE(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/calculate-percentage-characteristics-cause-error-dde?projectId=${idProject}`));
  } 

  getAllCauseErrorDII(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-dii?projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorDII(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/calculate-percentage-characteristics-cause-error-dii?projectId=${idProject}`));
  } 

  getAllCauseErrorVAR(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-var?projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorVAR(idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/calculate-percentage-characteristics-cause-error-var?projectId=${idProject}`));
  } 

  updateGrade(idReq:number,idCar:number,grade:number):Promise<Number>{
    return firstValueFrom(this.http.post<Number>(`http://localhost:8080/characteristics/update-grade/${idReq}/${idCar}`,grade));
  }

  updateError(idReq:number,idCar:number,error:ErrorInterface):Promise<ErrorInterface>{
    return firstValueFrom(this.http.post<ErrorInterface>(`http://localhost:8080/characteristics/update-cause-error/${idReq}/${idCar}`,error));
  }


  
  
}
