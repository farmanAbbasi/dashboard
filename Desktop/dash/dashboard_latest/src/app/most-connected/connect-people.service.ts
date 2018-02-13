import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from './people';

@Injectable()
export class ConnectPeopleService {

  person: People[];
  list: any;

  constructor(private http: HttpClient) { }
  private tagUrl = '../assets/connect.json';  // URL to web api
  /** GET heroes from the server */
  getPeople(): Observable<People[]> {
    return this.http.get<People[]>('../assets/connect.json');
  }

}
