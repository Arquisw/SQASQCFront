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
    static readonly SW_CALIFICACION_EXITOSA: string = 'Se califico correctamente';    
    static readonly SW_LO_SENTIMOS: String = 'Lo sentimos'; 
    static readonly SW_ERROR_NOTA : string = 'No se pudo calificar. Recuerde que la nota debe estar entre 0.1 y 9';    
    static readonly SW_ERROR_TIPO_ERROR : string = 'No se pudo calificar. Recuerde que si la nota no es mayor a 8 debe calificar el tipo de error';
    static readonly SW_REQUIREMENTS: string = '/requirements';
    static readonly FUNCIONAL : string = "Funcional";
    static readonly NO_FUNCIONAL: string = "NO Funcional";

}