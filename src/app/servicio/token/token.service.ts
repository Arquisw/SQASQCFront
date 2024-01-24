import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class TokenService {
  private readonly TOKEN_ENDPOINT: string = '/token';
  private readonly ACTUALIZAR_TOKEN_ENDPOINT: string = '/actualizar';

  url = environment.url;
 

  constructor(private http: HttpClient) { }


  actualizarToken(): void {
    this.consumirServicioActualizarToken().subscribe(() => {});
  }

  consumirServicioActualizarToken(): Observable<void> {
    return this.http.get<void>(`${this.url}/api/token/${this.ACTUALIZAR_TOKEN_ENDPOINT}`);
  }
}