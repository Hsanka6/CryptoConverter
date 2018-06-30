import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {BASE_URL, API_KEY} from '../util/constants';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoinApiService {
  rate:number;

  constructor(private http: HttpClient) { }

  getCoinValue = (url:String) : Observable<number>  => {
    return Observable.create(observable => {
      const header = new HttpHeaders().set('X-CoinAPI-Key', API_KEY);
      this.http.get<CoinApiService>(`$(BASE_URL)/$(url)`, {headers: header}).subscribe( data => {
          this.rate = data.rate;
          observable._next()
      })
    })

  }
}
