import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private _http:HttpClient) {
    
  }
  
  apiUrl='http://localhost:3001/all';
  getData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  };
}
