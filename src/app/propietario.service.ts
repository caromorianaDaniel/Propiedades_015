import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Propietario } from './propietarios';

@Injectable({ providedIn: 'root' })
export class PropietarioService {
  private propietariosUrl =
    'https://practica-restapi-heroku-dcm.herokuapp.com/propietarios'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPropietarios(): Observable<Propietario[]> {
    const url = `${this.propietariosUrl}`;
    return this.http
      .get<Propietario[]>(url)
      .pipe(catchError(this.handleError<Propietario[]>('getPropietarios', [])));
  }

  getPropietariosNo404<Data>(_DNI: string): Observable<Propietario> {
    const url = `${this.propietariosUrl}/?_DNI=${_DNI}`;
    return this.http.get<Propietario[]>(url).pipe(
      map((propietarios) => propietarios[0]), // returns a {0|1} element array
      catchError(this.handleError<Propietario>(`getPropietario _DNI=${_DNI}`))
    );
  }

  getPropietario(_DNI: string): Observable<Propietario> {
    const url = `${this.propietariosUrl}/buscar/${_DNI}`;
    return this.http
      .get<Propietario>(url)
      .pipe(
        catchError(this.handleError<Propietario>(`getPropietario _DNI=${_DNI}`))
      );
  }

  addPropietario(propietario: Propietario): Observable<Propietario> {
    const url = `${this.propietariosUrl}/crear`;
    return this.http
      .post<Propietario>(url, propietario, this.httpOptions)
      .pipe(catchError(this.handleError<Propietario>('addPropietario')));
  }

  deletePropietario(
    propietario: Propietario | string
  ): Observable<Propietario> {
    const _DNI =
      typeof propietario === 'string' ? propietario : propietario._DNI;
    const url = `${this.propietariosUrl}/eliminar/${_DNI}`;

    return this.http
      .delete<Propietario>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Propietario>('deletePropietario')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - _DNI of the operation that failed
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
