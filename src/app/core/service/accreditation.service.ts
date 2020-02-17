import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccreditationService {

    private baseUrl = `${environment.UrlApi}v1/accreditation`;

    constructor(private http: HttpClient) {
    }

    createAccreditation(accreditation: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, accreditation);
    }

    deleteMerchant(idMerchant: number): Observable<Object> {
        return this.http.delete(`${this.baseUrl}/${idMerchant}`);
    }

}
