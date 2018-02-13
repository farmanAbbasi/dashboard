import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConnectPeopleService } from './connect-people.service';
import { People } from './people';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@Component({
  selector: 'app-most-connected',
  templateUrl: './most-connected.component.html',
  styleUrls: ['./most-connected.component.css']
})
export class MostConnectedComponent implements OnInit {
  title = 'most connected';
  people: People[];

  constructor(private p: ConnectPeopleService  ) { }



  ngOnInit() {
    this.p.getPeople().subscribe(person => this.people = person);
  }

}
