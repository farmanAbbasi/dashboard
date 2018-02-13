import { Injectable } from '@angular/core';
import {Trend} from './trend.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TrendsdataService {

  jsonUrl = 'assets/trends.json';
  trends: Trend[];

  constructor(private http: HttpClient) { }

  // Reading data from json and returning
  getTrends(): Observable<Trend[]> {
    return this.http.get<Trend[]>(this.jsonUrl);
  }
}
