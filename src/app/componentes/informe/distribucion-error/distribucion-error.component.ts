import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';

@Component({
  selector: 'app-distribucion-error',
  templateUrl: './distribucion-error.component.html',
  styleUrls: ['./distribucion-error.component.css']
})
export class DistribucionErrorComponent {

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
    this.caracteristicaService.getAllCaracteristicaByIdAndName(constantes.VACIO,this.projectId!).then(resp => {this.distribucionErrorNumero=resp})  
    this.caracteristicaService.getAllPercentageByCaracteristica(constantes.VACIO,this.projectId!).then(resp => {this.distribucionErrorPorcentaje=resp})   
    this.caracteristicaService.getAllCauseErrorDDE(constantes.VACIO,this.projectId!).then(resp => {this.TodosErrorDDE=resp})
    this.caracteristicaService.getAllPercentageCauseErrorDDE(constantes.VACIO,this.projectId!).then(resp => {this.TodosPorcErrorDDE=resp})
    this.caracteristicaService.getAllCauseErrorDII(constantes.VACIO,this.projectId!).then(resp => {this.TodosErrorDII=resp})  
    this.caracteristicaService.getAllPercentageCauseErrorDII(constantes.VACIO,this.projectId!).then(resp => {this.TodosPorcErrorDII=resp}) 
    this.caracteristicaService.getAllCauseErrorVAR(constantes.VACIO,this.projectId!).then(resp => {this.TodosErrorVAR=resp})
    this.caracteristicaService.getAllPercentageCauseErrorVAR(constantes.VACIO,this.projectId!).then(resp => {this.TodosPorcErrorVAR=resp})
    this.caracteristicaService.getErrorAllRequieremnt(constantes.VACIO,this.projectId!).then(resp => {this.TodosError=resp})
    this.caracteristicaService.getPercentageAllRequieremnt(constantes.VACIO,this.projectId!).then(resp => {this.TodosPorcError=resp})
    this.caracteristicaService.getCauseErrorAllRequieremnt(constantes.VACIO,this.projectId!).then(resp => {this.CauseError=resp})    
    this.caracteristicaService.getCauseErrorPercentageAllRequieremnt(constantes.VACIO,this.projectId!).then(resp => {this.CauseErrorPorc=resp})
  }

}
