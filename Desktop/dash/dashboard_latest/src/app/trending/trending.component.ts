import { Component, OnInit } from '@angular/core';
import {Trend} from './trend.interface';
import { Observable} from 'rxjs/Observable';
import { TrendsdataService } from './trendsdata.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trends: Trend[] ;

  constructor(private trendsdata: TrendsdataService) { }

  // Getting trends from TrendsdataService
  ngOnInit() {
    this.trendsdata.getTrends()
    .subscribe(trends => this.trends = trends);
  }
}

