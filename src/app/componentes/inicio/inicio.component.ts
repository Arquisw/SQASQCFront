import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { tipoConsultoria } from 'src/app/interfaces/proyecto';
import { constantes } from 'src/app/navbar/constantes/constantes';
import { RequisitosService } from 'src/app/servicio/requisito/requisitos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  token!: string;
  projectId = window.sessionStorage.getItem(constantes.PROJECT_ID);
  tipoConsultoria ?: tipoConsultoria ;
  requisito !: boolean;
  primerIngreso!:boolean ;

  constructor(private activatedRoute:ActivatedRoute, private requisitoService: RequisitosService){

  }
  
 
  // ngOnInit(): void {  
  //   const tokenTemporal = this.activatedRoute.snapshot.queryParamMap.get('token');
  //   this.token = tokenTemporal !== null && tokenTemporal !== undefined ? tokenTemporal : '';
  //   this.projectId = this.activatedRoute.snapshot.queryParamMap.get('id');
   
  //   console.log('Token:', this.token);
  //   console.log('ID:', this.projectId);
 
  //   sessionStorage.setItem('Authorization', this.token);
  //   sessionStorage.setItem(constantes.PROJECT_ID, this.projectId!);
  // }
  ngOnInit(): void {
    this.activatedRoute?.params.pipe(
       switchMap( 
         ({id}) => this.projectId=id
         )
     ).subscribe(resp => this.projectId!=resp)  
     
     this.activatedRoute?.params.pipe(
      switchMap( 
        ({id}) => this.requisitoService.obtenerTipoConsultoria(this.projectId!)
        )
    ).subscribe(resp=>{this.tipoConsultoria=resp, 
      window.sessionStorage.setItem('requisitos',new Boolean(this.tipoConsultoria?.requirementsEngineering).toString()),  
      window.sessionStorage.setItem('sqa',new Boolean(this.tipoConsultoria?.sqa).toString()),    
      window.sessionStorage.setItem('sqc',new Boolean(this.tipoConsultoria?.sqc).toString())})
    
     window.sessionStorage.setItem(constantes.PROJECT_ID, this.projectId!);  
     //location.reload() ;  
     
  }

  redirigirRequisitos(){
    window.location.href = 'http://localhost:4200/inicio/';
  }

  cargarData(){    
    this.requisitoService.obtenerTipoConsultoria(this.projectId!).then(resp=>{this.tipoConsultoria=resp, 
      window.sessionStorage.setItem('requisitos',new Boolean(this.tipoConsultoria?.requirementsEngineering).toString())  ,  
    window.sessionStorage.setItem('sqa',new Boolean(this.tipoConsultoria?.sqa).toString()),    
    window.sessionStorage.setItem('sqc',new Boolean(this.tipoConsultoria?.sqc).toString())})    
  } 
}
