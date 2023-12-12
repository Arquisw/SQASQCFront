import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RequisitoInterface, tipoRequisito } from 'src/app/interfaces/requisito';
import { alert } from 'src/app/navbar/alert/alert';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{

  mensajeError="";

  req : RequisitoInterface = {
    projectId: 1,
    name: '',
    description: '',
    typeRequirement : ''

  }

  constructor(private requerimiento : RequisitosService, private alert: alert, private constantes?:constantes, private activatedRoute?:ActivatedRoute) { }


  ngOnInit(): void {      
    this.activatedRoute?.params.
    pipe(
        switchMap(({id}) => this.requerimiento.getRequerimientoById(id))
        )
      .subscribe(
        resp => this.req=resp)
      
    
  }

  guardar(formularioRequisito:NgForm){
    this.req.name=formularioRequisito.value.nombre;
    this.req.description=formularioRequisito.value.descripcion;
    this.req.typeRequirement=formularioRequisito.value.tipoRequisito;
    this.requerimiento.agregarRequerimiento(this.req)
      .then( 
        resp => {this.req=resp,        
        this.alert.success(constantes.SW_BIEN_HECHO,constantes.SW_GUARDADO),
        formularioRequisito.resetForm()
        
      },
      (err:HttpErrorResponse) =>{ 
        this.mensajeError=(err.error.humanMessage),
        this.alert.error(constantes.SW_LO_SENTIMOS,err.error.humanMessage)}
      )
    }
   

}


