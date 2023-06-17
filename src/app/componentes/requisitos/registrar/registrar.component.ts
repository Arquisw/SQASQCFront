import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequisitoInterface, tipoRequisito } from 'src/app/interfaces/requisito';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{

  mensajeError="";

  req : RequisitoInterface = {
    nombre: '',
    descripcion: '',
    tipoRequisito : ''

  }

  constructor(private requerimiento : RequisitosService) { }


  ngOnInit(): void {
  }

  guardar(formularioRequisito:NgForm){
    this.req.nombre=formularioRequisito.value.nombre;
    this.req.descripcion=formularioRequisito.value.descripcion;
    this.req.tipoRequisito=formularioRequisito.value.tipoRequisito
    this.requerimiento.agregarRequerimiento(this.req)
    .subscribe( resp => {this.req=resp} , 
                error =>{ this.mensajeError = error}
    )
  }

}


