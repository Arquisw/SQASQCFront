import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';

@Component({
  selector: 'app-dist-error-func',
  templateUrl: './dist-error-func.component.html',
  styleUrls: ['./dist-error-func.component.css']
})
export class DistErrorFuncComponent {

  distribucionErrorNumero!: InformeInterface; 
  distribucionErrorPorcentaje!: InformeInterface;
  TodosErrorDDE!: InformeInterface;
  TodosPorcErrorDDE!: InformeInterface;
  TodosErrorDII!: InformeInterface;
  TodosPorcErrorDII!: InformeInterface;
  TodosErrorVAR!: InformeInterface;
  TodosPorcErrorVAR!: InformeInterface;

  TodosError!:InformeInterface;
  TodosPorcError !:InformeInterface;

  CauseError!: ErrorCompleto;
  CauseErrorPorc!: ErrorCompleto;

  caracteristicas: CaracteristicaInterface[] = []
  
  projectId = sessionStorage.getItem(constantes.PROJECT_ID);

  constructor(private caracteristicaService: CaracteristicaService,private activatedRoute?:ActivatedRoute) {}
  ngOnInit(): void {   
    this.caracteristicaService.getAllCaracteristicaByIdAndName(constantes.FUNCIONAL,this.projectId!).then(resp => {this.distribucionErrorNumero=resp})
    this.caracteristicaService.getAllPercentageByCaracteristica(constantes.FUNCIONAL,this.projectId!).then(resp => {this.distribucionErrorPorcentaje=resp})
    this.caracteristicaService.getAllCauseErrorDDE(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosErrorDDE=resp}) 
    this.caracteristicaService.getAllPercentageCauseErrorDDE(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosPorcErrorDDE=resp}) 
    this.caracteristicaService.getAllCauseErrorDII(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosErrorDII=resp})
    this.caracteristicaService.getAllPercentageCauseErrorDII(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosPorcErrorDII=resp})
    this.caracteristicaService.getAllCauseErrorVAR(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosErrorVAR=resp})
    this.caracteristicaService.getAllPercentageCauseErrorVAR(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosPorcErrorVAR=resp})
    this.caracteristicaService.getErrorAllRequieremnt(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosError=resp})
    this.caracteristicaService.getPercentageAllRequieremnt(constantes.FUNCIONAL,this.projectId!).then(resp => {this.TodosPorcError=resp})
    this.caracteristicaService.getCauseErrorAllRequieremnt(constantes.FUNCIONAL,this.projectId!).then(resp => {this.CauseError=resp})
    this.caracteristicaService.getCauseErrorPercentageAllRequieremnt(constantes.FUNCIONAL,this.projectId!).then(resp => {this.CauseErrorPorc=resp})   
  }


}
