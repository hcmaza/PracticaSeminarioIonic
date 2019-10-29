import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaserviceService {

  constructor(private httpClient: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>('http://localhost:8082/personas').
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  getPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>('http://localhost:8082/personas/' + id).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  postPersona(p: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>('http://localhost:8082/personas', p).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  putPersona(p: Persona): Observable<Persona> {
    return this.httpClient.put<Persona>('http://localhost:8082/personas/' + p.id, p, this.httpOptions).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  deletePersona(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>('http://localhost:8082/personas/' + id).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }



  // Error handling
  errorHandl( error ) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
