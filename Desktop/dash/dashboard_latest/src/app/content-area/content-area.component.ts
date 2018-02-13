import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  options = {
    cellHeight: 'auto',
    verticalMargin: 10,
    handleClass: 'handle',
    animate: true,
/**************************************/
    autoFit: true,   // just fit based on tallest content.
    autoFitByOverflow: true
};
  constructor() { }

  ngOnInit() {
  }
  showOrHideManually(shouldShow: boolean) {
    const content_area = document.querySelector('.main');
    if (content_area instanceof HTMLElement) {
      if (!shouldShow) {
        content_area.style.marginLeft = '240px';
      } else {
        content_area.style.marginLeft = '0px';
      }
    } else {
      throw new Error('element #test not in document');
    }
  }
}
