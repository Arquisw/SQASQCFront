import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexNonAxisChartSeries, ApexOptions, ApexPlotOptions, ApexStroke, ApexTheme, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { InformeInterface } from 'src/app/interfaces/informe';
import { ChartOptions, grafica } from 'src/app/navbar/grafica/grafica';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {
  public GraficaVerde: Partial<ChartOptions>;
  public BarraVerde : Partial<ChartOptions>;
  public GraficaAmar : Partial<ChartOptions>;
  public GraficaAmarIzq : Partial<ChartOptions>;

  correcto: number = 0;
  incorrecto: number = 0;

  distribucionErrorNumero!: InformeInterface; 
  distribucionErrorPorcentaje!: InformeInterface;
  TodosErrorDDE!: InformeInterface;
  TodosPorcErrorDDE!: InformeInterface;
  TodosErrorDII!: InformeInterface;
  TodosPorcErrorDII!: InformeInterface;
  TodosErrorVAR!: InformeInterface;
  TodosPorcErrorVAR!: InformeInterface;

  caracteristicas: CaracteristicaInterface[] = []

  constructor(private grafica: grafica, private caracteristicaService?: CaracteristicaService,private activatedRoute?:ActivatedRoute) {
    this.GraficaVerde = this.grafica.GraficaVerde;
    this.BarraVerde = this.grafica.BarraVerde;
    this.GraficaAmar = this.grafica.GraficaAmarilla;
    this.GraficaAmarIzq = this.grafica.GraficaAmarillaIzq;
  }
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
        ({id}) => this.caracteristicaService!.getAllCauseErrorDDE("1")
        )
    ).subscribe(resp => this.TodosErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDDE("1")
        )
    ).subscribe(resp => this.TodosPorcErrorDDE=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorDII("1")
        )
    ).subscribe(resp => this.TodosErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorDII("1")
        )
    ).subscribe(resp => this.TodosPorcErrorDII=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllCauseErrorVAR("1")
        )
    ).subscribe(resp => this.TodosErrorVAR=resp);

    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.caracteristicaService!.getAllPercentageCauseErrorVAR("1")
        )
    ).subscribe(resp => this.TodosPorcErrorVAR=resp);
  }
}
