import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateService } from '../internationalization/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  shouldShow = false;
  content;
  footer;
  constructor(private translator: TranslateService) {
    translator.use('en');
  }

  ngOnInit() {
    this.content = new ContentAreaComponent();
    this.footer = new FooterComponent();

  }
  ngAfterViewInit() {
  }

  showOrHideManually() {
    this.shouldShow = !this.shouldShow;
    this.content.showOrHideManually(this.shouldShow);
    this.footer.showOrHideManually(this.shouldShow);
  }
  changeLanguage(option) {
    this.translator.use(option);
  }
}
