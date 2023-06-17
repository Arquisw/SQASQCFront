import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { InformeComponent } from './componentes/informe/informe.component';
import { RegistrarComponent } from './componentes/requisitos/registrar/registrar.component';
import { ConsultarComponent } from './componentes/requisitos/consultar/consultar.component';
import { CalificarComponent } from './componentes/requisitos/calificar/calificar.component';
import { InterceptorService } from './servicio/interceptor/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RequisitosComponent,
    InformeComponent,
    RegistrarComponent,
    ConsultarComponent,
    CalificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
