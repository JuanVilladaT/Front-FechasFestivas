import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FestivoPorAnho } from '../interfaces/festivo-anho.interface';
import { environments } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class FestivosService {
  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getFestivosPorAnho(anho: number): Observable<FestivoPorAnho[]> {
    return this.httpClient.get<FestivoPorAnho[]>(
      `${this.baseUrl}/villada/ObtenerFestivosAnho/${anho}`
    );
  }
  getFestivosPorFecha(
    anho: number,
    mes: number,
    dia: number
  ): Observable<string> {
    return this.httpClient.get<string>(
      `${this.baseUrl}/villada/verificar/${anho}/${mes}/${dia}`
    );
  }
}
