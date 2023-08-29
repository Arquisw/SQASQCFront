import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export abstract class constantes{

    static readonly SW_SUCCESS: String = 'Success';  
    static readonly SW_INFO: String = 'Info';    
    static readonly SW_ERROR: String = 'Error';    
    static readonly SW_WARNING: String = 'Warning';

    static readonly SW_BIEN_HECHO: String = 'Bien hecho!!';    
    static readonly SW_GUARDADO: String = 'Se guardo con exito';
    
    static readonly SW_LO_SENTIMOS: String = 'Lo sentimos';  

}