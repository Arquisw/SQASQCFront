import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { constantes } from 'src/app/navbar/constantes/constantes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  token!: string;
  projectId = localStorage.getItem(constantes.PROJECT_ID);

  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {  

    this.activatedRoute.queryParams.subscribe(
      params => {
        this.token = params['token'];
        this.projectId = params['id'];
      }
    )
    
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.projectId=id
        )
    ).subscribe(resp => this.projectId!=resp) 
    
    localStorage.setItem(constantes.PROJECT_ID, this.projectId!);
  }

  redirigirRequisitos(){
    window.location.href = 'http://localhost:4200/inicio/';
  }

  

}
