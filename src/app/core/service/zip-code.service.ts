import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  private baseUrl = `${environment.UrlApi}v1/zipcode`;

  constructor(private http: HttpClient) {}

  getAddress(zipCode: any): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${zipCode}`)
  }
}
