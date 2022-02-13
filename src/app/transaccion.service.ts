import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Transaccion } from './transacciones';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  private transaccionesUrl =
    'https://practica-restapi-heroku-dcm.herokuapp.com/transacciones'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET transacciones from the server */
  getTransacciones(): Observable<Transaccion[]> {
    const url = `${this.transaccionesUrl}`;
    return this.http
      .get<Transaccion[]>(url)
      .pipe(
        catchError(this.handleError<Transaccion[]>('getTransacciones', []))
      );
  }

  /** GET transaccion by _identificador. Return `undefined` when _identificador not found */
  getTransaccionesNo404<Data>(_identificador: string): Observable<Transaccion> {
    const url = `${this.transaccionesUrl}/?_identificador=${_identificador}`;
    return this.http.get<Transaccion[]>(url).pipe(
      map((transacciones) => transacciones[0]), // returns a {0|1} element array
      catchError(
        this.handleError<Transaccion>(
          `getTransaccion _identificador=${_identificador}`
        )
      )
    );
  }

  /** GET transaccion by _identificador. Will 404 if _identificador not found */
  getTransaccion(_identificador: string): Observable<Transaccion> {
    const url = `${this.transaccionesUrl}/buscar/${_identificador}`;
    return this.http
      .get<Transaccion>(url)
      .pipe(
        catchError(
          this.handleError<Transaccion>(
            `getTransaccion _identificador=${_identificador}`
          )
        )
      );
  }

  addTransaccion(transaccion: Transaccion): Observable<Transaccion> {
    const url = `${this.transaccionesUrl}/crear`;
    return this.http
      .post<Transaccion>(url, transaccion, this.httpOptions)
      .pipe(catchError(this.handleError<Transaccion>('addTransaccion')));
  }

  deleteTransaccion(
    transaccion: Transaccion | string
  ): Observable<Transaccion> {
    const _identificador =
      typeof transaccion === 'string'
        ? transaccion
        : transaccion._identificador;
    const url = `${this.transaccionesUrl}/${_identificador}`;

    return this.http
      .delete<Transaccion>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Transaccion>('deleteTransaccion')));
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
}
