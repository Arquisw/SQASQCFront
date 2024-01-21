import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexNonAxisChartSeries, ApexOptions, ApexPlotOptions, ApexStroke, ApexTheme, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { switchMap } from 'rxjs';
import { CaracteristicaInterface } from 'src/app/interfaces/caracteristica';
import { ErrorCompleto, InformeInterface } from 'src/app/interfaces/informe';
import { ChartOptions, grafica } from 'src/app/navbar/grafica/grafica';
import { CaracteristicaService } from 'src/app/servicio/caracteristica/caracteristica.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {  

  constructor(private caracteristicaService?: CaracteristicaService,private activatedRoute?:ActivatedRoute) {}
  ngOnInit(): void {}
}
