import { Component, OnInit } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  model = new Department('', '');
  submitted = false;
  constructor() { }
  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {
  }
}
