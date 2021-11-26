import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, from } from 'rxjs'
import { API } from 'src/app/app-config'

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  api: string = API

  constructor(private http: HttpClient) { }

  register(params: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(`${this.api}register`, params, httpOptions)
  }
}
