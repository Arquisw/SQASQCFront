import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { PersonaResumen } from 'src/app/interfaces/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  private url:string = environment.url

  constructor(private http: HttpClient) { }

  consultarPersonaPorId(id: number): Promise<PersonaResumen> {
    return firstValueFrom(this.http.get<PersonaResumen>(`http://localhost:8080/api/usuarios/${id}`));
  }
}
