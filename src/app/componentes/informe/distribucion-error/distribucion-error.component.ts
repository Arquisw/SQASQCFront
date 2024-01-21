import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface, ErrorCompleto } from 'src/app/interfaces/informe';
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
        ({id}) => this.caracteristicaService!.getAllCaracteristicaByIdAndName("","1")
        )
    ).subscribe(resp => this.distribucionErrorNumero=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageByCaracteristica("","1")
        )
    ).subscribe(resp => this.distribucionErrorPorcentaje=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDDE("","1")
        )
    ).subscribe(resp => this.TodosErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDDE("","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDII("","1")
        )
    ).subscribe(resp => this.TodosErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDII("","1")
        )
    ).subscribe(resp => this.TodosPorcErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorVAR("","1")
        )
    ).subscribe(resp => this.TodosErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorVAR("","1")
        )
    ).subscribe(resp => this.TodosPorcErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getErrorAllRequieremnt("","1")
        )
    ).subscribe(resp => this.TodosError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getPercentageAllRequieremnt("","1")
        )
    ).subscribe(resp => this.TodosPorcError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorAllRequieremnt("","1")
        )
    ).subscribe(resp => this.CauseError=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getCauseErrorPercentageAllRequieremnt("","1")
        )
    ).subscribe(resp => this.CauseErrorPorc=resp);
  }

}
