import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipsModule } from '@angular/material/chips';
import { Group } from '../group-form/group';

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent {

  // boolean variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma are separator keycodes, clicking on them, adds a new tag
  separatorKeysCodes = [ENTER, COMMA];

  employees = [
  ];

  // Add names
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if (this.removeDuplicates(this.employees, value)) {

      // Add our name
      if ((value || '').trim()) {
        this.employees.push({ name: value.trim() });
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
    } else {
      if (input) {
        input.value = '';
      }
      alert('Tag Already Added');
    }

  }

  removeDuplicates(employees, name): any {
    console.log('name: ' + name);

    console.log(this.employees);
    let flag = true;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name.toLowerCase() === name.toLowerCase()) {
        flag = false;
        break;
      }
    }
    console.log(flag);
    return flag;
  }



  remove(employee: any): void {
    const index = this.employees.indexOf(employee);

    if (index >= 0) {
      this.employees.splice(index, 1);
    }
  }
}

