import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MerchantService {
    private baseUrl = `${environment.UrlApi}v1/merchant`;

    constructor(private http: HttpClient) {}

    getMerchant(): Observable<Object> {
        return this.http.get(`${this.baseUrl}`);
    }

}
