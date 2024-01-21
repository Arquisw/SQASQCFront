import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { InformeComponent } from './componentes/informe/informe.component';
import { RegistrarComponent } from './componentes/requisitos/registrar/registrar.component';
import { ConsultarComponent } from './componentes/requisitos/consultar/consultar.component';
import { CalificarComponent } from './componentes/requisitos/calificar/calificar.component';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './componentes/requisitos/detalle/detalle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { DistribucionErrorComponent } from './componentes/informe/distribucion-error/distribucion-error.component';
import { DistErrorFuncComponent } from './componentes/informe/dist-error-func/dist-error-func.component';
import { DistErrorNoFuncComponent } from './componentes/informe/dist-error-no-func/dist-error-no-func.component';
import { NdmComponent } from './componentes/informe/ndm/ndm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RequisitosComponent,
    InformeComponent,
    RegistrarComponent,
    ConsultarComponent,
    CalificarComponent,
    DetalleComponent,
    DistribucionErrorComponent,
    DistErrorFuncComponent,
    DistErrorNoFuncComponent,
    NdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgApexchartsModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
