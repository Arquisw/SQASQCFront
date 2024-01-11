import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class TokenService {
  private readonly TOKEN_ENDPOINT: string = '/token';
  private readonly ACTUALIZAR_TOKEN_ENDPOINT: string = '/actualizar';
 

  constructor(private http: HttpClient) { }


  actualizarToken(): void {
    this.consumirServicioActualizarToken().subscribe(() => {});
  }

  consumirServicioActualizarToken(): Observable<void> {
    return this.http.get<void>(`http://localhost:8080/api/token/actualizar`);
  }
}