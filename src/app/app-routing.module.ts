import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { InformeComponent } from './componentes/informe/informe.component';
import { CalificarComponent } from './componentes/requisitos/calificar/calificar.component';
import { ConsultarComponent } from './componentes/requisitos/consultar/consultar.component';
import { RegistrarComponent } from './componentes/requisitos/registrar/registrar.component';
import { DetalleComponent } from './componentes/requisitos/detalle/detalle.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'requisitos',
    component:RequisitosComponent
  },
  {
    path: 'informe',
    component: InformeComponent
  },
  {
    path: 'requisitos/calificar',
    component:CalificarComponent
  },
  {
    path: 'requisitos/consultar',
    component:ConsultarComponent
  },
  {
    path: 'requisitos/registrar',
    component:RegistrarComponent
  },
  {
    path: 'requisitos/detalle/:id',
    component:DetalleComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
