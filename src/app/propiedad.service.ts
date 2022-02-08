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

  /** GET propiedades from the server */
  getPropiedades(): Observable<Propiedad[]> {
    const url = `${this.propiedadesUrl}`;
    return this.http
      .get<Propiedad[]>(url)
      .pipe(catchError(this.handleError<Propiedad[]>('getPropiedades', [])));
  }

  /** GET propiedad by _identificador. Return `undefined` when _identificador not found */
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

  /** GET propiedad by _identificador. Will 404 if _identificador not found */
  getPropiedad(
    numero: string,
    calle: string,
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

  /* GET propiedades whose _identificador contains search term */
  searchPropiedades(term: string): Observable<Propiedad[]> {
    if (!term.trim()) {
      // if not search term, return empty propiedad array.
      return of([]);
    }
    return this.http
      .get<Propiedad[]>(`${this.propiedadesUrl}/?_identificador=${term}`)
      .pipe(catchError(this.handleError<Propiedad[]>('searchPropiedades', [])));
  }

  //////// Save methods //////////

  /** POST: add a new propiedad to the server */
  addPropiedad(propiedad: Propiedad): Observable<Propiedad> {
    const url = `${this.propiedadesUrl}/crear`;
    return this.http
      .post<Propiedad>(url, propiedad, this.httpOptions)
      .pipe(catchError(this.handleError<Propiedad>('addPropiedad')));
  }

  /** DELETE: delete the propiedad from the server */
  deletePropiedad(propiedad: Propiedad | string): Observable<Propiedad> {
    const _identificador =
      typeof propiedad === 'string' ? propiedad : propiedad.identificador;
    const url = `${this.propiedadesUrl}/${_identificador}`;

    return this.http
      .delete<Propiedad>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Propiedad>('deletePropiedad')));
  }

  /** PUT: update the propiedad on the server */
  updatePropiedad(propiedad: Propiedad): Observable<any> {
    return this.http
      .put(this.propiedadesUrl, propiedad, this.httpOptions)
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
