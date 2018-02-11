import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbDropdown, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';//for routing
import{FormsModule} from '@angular/forms';//for ngModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ForumComponent } from './forum/forum.component';



import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentAreaComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    InfiniteScrollModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
