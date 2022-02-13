import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Propiedad } from './propiedades';
import { Ciudades } from './ciudades';

@Injectable({ providedIn: 'root' })
export class PropiedadService {
  private propiedadesUrl =
    'https://practica-restapi-heroku-dcm.herokuapp.com/propiedades'; // URL to web api
  private ciudadesUrl =
    'https://practica-restapi-heroku-dcm.herokuapp.com/ciudades'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPropiedades(): Observable<Propiedad[]> {
    const url = `${this.propiedadesUrl}`;
    const propd = this.http
      .get<Propiedad[]>(url)
      .pipe(catchError(this.handleError<Propiedad[]>('getPropiedades', [])));
    return propd;
  }

  getPropiedadNo404<Data>(identificador: string): Observable<Propiedad> {
    const url = `${this.propiedadesUrl}/buscar/${identificador}`;
    return this.http.get<Propiedad[]>(url).pipe(
      map((propiedades) => propiedades[0]), // returns a {0|1} element array
      catchError(
        this.handleError<Propiedad>(
          `getPropiedad identificador=${identificador}`
        )
      )
    );
  }

  getPropiedad(
    calle: string,
    numero: string,
    codpost: number
  ): Observable<Propiedad> {
    const url = `${this.propiedadesUrl}/buscar/${calle}/${numero}/${codpost}`;
    return this.http
      .get<Propiedad>(url)
      .pipe(
        catchError(
          this.handleError<Propiedad>(
            `getPropiedad calle=${calle} numero=${numero} codpost=${codpost}`
          )
        )
      );
  }
  addPropiedad(propiedad: Propiedad): Observable<Propiedad> {
    const url = `${this.propiedadesUrl}/crear`;
    return this.http
      .post<Propiedad>(url, propiedad, this.httpOptions)
      .pipe(catchError(this.handleError<Propiedad>('addPropiedad')));
  }

  deletePropiedad(
    calle: string,
    numero: string,
    codpost: number
  ): Observable<Propiedad[]> {
    const url = `${this.propiedadesUrl}/eliminar/${calle}/${numero}/${codpost}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError<any>('deletePropiedad')));
  }

  updatePropiedad(propiedad: Propiedad): Observable<any> {
    const url = `${this.propiedadesUrl}/modificar/solar`;
    return this.http
      .put(url, propiedad, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updatePropiedad')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - _identificador of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getCiudades(): Observable<Ciudades[]> {
    const url = `${this.ciudadesUrl}`;
    return this.http
      .get<Ciudades[]>(url)
      .pipe(catchError(this.handleError<Ciudades[]>('getCiudades', [])));
  }
}
