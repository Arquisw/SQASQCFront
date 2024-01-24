import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  projectId :any;
  token!: string;

  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {  

    /*this.activatedRoute.queryParams.subscribe(
      params => {
        this.token = params['token'];
        this.projectId = params['id'];
      }
    )*/
    
    this.activatedRoute?.params.
    pipe(
      switchMap( 
        ({id}) => this.projectId=id
        )
    ).subscribe(resp => this.projectId=resp) 
    
    localStorage.setItem('projectId', this.projectId);
    console.log(localStorage.getItem('projectId'))
  }

  

}
