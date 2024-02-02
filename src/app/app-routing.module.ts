import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { InformeComponent } from './componentes/informe/informe.component';
import { CalificarComponent } from './componentes/requisitos/calificar/calificar.component';
import { ConsultarComponent } from './componentes/requisitos/consultar/consultar.component';
import { RegistrarComponent } from './componentes/requisitos/registrar/registrar.component';
import { DetalleComponent } from './componentes/requisitos/detalle/detalle.component';
import { DistribucionErrorComponent } from './componentes/informe/distribucion-error/distribucion-error.component';
import { DistErrorNoFuncComponent } from './componentes/informe/dist-error-no-func/dist-error-no-func.component';
import { DistErrorFuncComponent } from './componentes/informe/dist-error-func/dist-error-func.component';
import { NdmComponent } from './componentes/informe/ndm/ndm.component';

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
    path: 'informe/ndmDistError',
    component: DistribucionErrorComponent
  },
  {
    path: 'informe/ndmDistErrorNoFunc',
    component: DistErrorNoFuncComponent
  },
  {
    path: 'informe/ndmDistErrorFunc',
    component: DistErrorFuncComponent
  },
  {
    path: 'informe/ndm',
    component: NdmComponent
  },
  {
    path: 'requisitos/calificar/:id',
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
