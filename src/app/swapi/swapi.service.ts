import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SwapiService {
    private _productUrl = 'https://swapi.co/api/planets/'; 
    constructor(private _http: HttpClient) {}
    getSwapi(): Observable<any> {
        return this._http.get<any>(this._productUrl)
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    } 
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}