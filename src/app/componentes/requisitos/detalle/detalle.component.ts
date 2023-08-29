import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RequisitoInterface } from 'src/app/interfaces/requisito';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  requisitos:RequisitoInterface[]=[];
  req : RequisitoInterface = {
    name: '',
    description: '',
    typeRequirement : ''

  }
  
  constructor(private requisitoService: RequisitosService, private activatedRoute?:ActivatedRoute){}
  
  ngOnInit(): void {    
    this.activatedRoute?.params.
    pipe(
      switchMap( ({id}) => this.requisitoService.getRequerimientoById(id))
    ).subscribe( resp => this.req=resp);   
  }

}
