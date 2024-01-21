import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
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

  constructor(private caracteristicaService?: CaracteristicaService,private activatedRoute?:ActivatedRoute) {}
  ngOnInit(): void {    
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCaracteristicaById("1")
        )
    ).subscribe(resp => this.caracteristicas=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCaracteristicaByIdAndName("Funcional","1")
        )
    ).subscribe(resp => this.distribucionErrorNumero=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageByCaracteristica("Funcional","1")
        )
    ).subscribe(resp => this.distribucionErrorPorcentaje=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDDE("Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDDE("Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDII("Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDII("Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorVAR("Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorVAR("Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getErrorAllRequieremnt("Funcional","1")
        )
    ).subscribe(resp => this.TodosError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getPercentageAllRequieremnt("Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorAllRequieremnt("Funcional","1")
        )
    ).subscribe(resp => this.CauseError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorPercentageAllRequieremnt("Funcional","1")
        )
    ).subscribe(resp => this.CauseErrorPorc=resp);
  }


}
