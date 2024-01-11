import { Injectable } from "@angular/core";
import Swal from "sweetalert2";



@Injectable({
    providedIn: 'root'
})

export class alert{

    public successTimer(titulo:String, text : String) : void {
        Swal.fire({
            icon: 'success',
            title: `${titulo}`,
            text: `${text}`
          }).then(function (result) {
            if (result.value) {
                location.href ='/requisitos/consultar';
            }
        })
    }

    public success(titulo:String, text : String) : void {
        Swal.fire({
            icon: 'success',
            title: `${titulo}`,
            text: `${text}`
          })
    }

    public error(titulo:String, text : String) : void {
        Swal.fire({
            icon: 'error',
            title: `${titulo}`,
            text: `${text}`
          })
    }

    public info(titulo:String, text : String) : void {
        Swal.fire({
            icon: 'info',
            title: `${titulo}`,
            text: `${text}`
          })
    }

}

function constructor() {
    throw new Error("Function not implemented.");
}
