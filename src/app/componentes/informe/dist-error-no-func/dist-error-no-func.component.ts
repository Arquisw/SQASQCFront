import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';

@Component({
  selector: 'app-dist-error-no-func',
  templateUrl: './dist-error-no-func.component.html',
  styleUrls: ['./dist-error-no-func.component.css']
})
export class DistErrorNoFuncComponent {

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
        ({id}) => this.caracteristicaService!.getAllCaracteristicaByIdAndName("NO Funcional","1")
        )
    ).subscribe(resp => this.distribucionErrorNumero=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageByCaracteristica("NO Funcional","1")
        )
    ).subscribe(resp => this.distribucionErrorPorcentaje=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDDE("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDDE("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDII("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDII("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorVAR("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorVAR("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getErrorAllRequieremnt("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getPercentageAllRequieremnt("NO Funcional","1")
        )
    ).subscribe(resp => this.TodosPorcError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorAllRequieremnt("NO Funcional","1")
        )
    ).subscribe(resp => this.CauseError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorPercentageAllRequieremnt("NO Funcional","1")
        )
    ).subscribe(resp => this.CauseErrorPorc=resp);
  }

}
