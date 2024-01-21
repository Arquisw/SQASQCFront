import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { ErrorInterface } from 'src/app/interfaces/error';
import { ErrorCompleto, InformeInterface } from 'src/app/interfaces/informe';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }  

  getCaracteristicaById(id:string):Promise<CaracteristicaInterface[]>{
    return firstValueFrom(this.http.get<CaracteristicaInterface[]>(`http://localhost:8080/characteristics/characteristics-requirement/${id}`));
  } 

  getAllCaracteristicaByIdAndName(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-type-requirement-name-characteristic?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllPercentageByCaracteristica(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/percentage-type-requirement-name-characteristic?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllCauseErrorDDE(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-dde?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorDDE(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/percentage-characteristics-cause-error-dde?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllCauseErrorDII(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-dii?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorDII(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/percentage-characteristics-cause-error-dii?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllCauseErrorVAR(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/count-characteristics-cause-error-var?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getAllPercentageCauseErrorVAR(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/characteristics/percentage-characteristics-cause-error-var?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getErrorAllRequieremnt(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/type-errors/count-error-distribution-all-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getPercentageAllRequieremnt(tipoRequisito:string,idProject:string):Promise<InformeInterface>{
    return firstValueFrom(this.http.get<InformeInterface>(`http://localhost:8080/type-errors/percentage-error-distribution-all-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getCauseErrorAllRequieremnt(tipoRequisito:string,idProject:string):Promise<ErrorCompleto>{
    return firstValueFrom(this.http.get<ErrorCompleto>(`http://localhost:8080/type-errors/count-cause-error-by-characteristic-for-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  } 

  getCauseErrorPercentageAllRequieremnt(tipoRequisito:string,idProject:string):Promise<ErrorCompleto>{
    return firstValueFrom(this.http.get<ErrorCompleto>(`http://localhost:8080/type-errors/percentage-cause-error-by-characteristic-for-requirements?typeRequirement=${tipoRequisito}&projectId=${idProject}`));
  }

  updateGrade(idReq:number,idCar:number,grade:number):Promise<Number>{
    return firstValueFrom(this.http.post<Number>(`http://localhost:8080/characteristics/update-grade/${idReq}/${idCar}`,grade));
  }  

  updateError(idReq:number,idCar:number,error:ErrorInterface):Promise<ErrorInterface>{
    return firstValueFrom(this.http.post<ErrorInterface>(`http://localhost:8080/characteristics/update-cause-error/${idReq}/${idCar}`,error));
  }


  
  
}
