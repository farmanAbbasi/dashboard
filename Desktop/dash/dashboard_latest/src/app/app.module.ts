import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatChip } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { TranslateModule, TranslateLoader } from './internationalization/internationalization.module';
import { TranslateHttpLoader } from './internationalization/http-loader';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router/app-router.module';
import { GroupFormComponent } from './group-form/group-form.component';
import { ForumComponent } from './forum/forum.component';
import { MatToolbarModule } from '@angular/material';
import { ConnectPeopleService } from './most-connected/connect-people.service';
import { TrendsdataService } from './trending/trendsdata.service';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GridStackModule } from 'ng2-gridstack';
import { MostConnectedComponent } from './most-connected/most-connected.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TrendingComponent } from './trending/trending.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { AngularFilePickerModule } from 'angular-file-picker';
import { MatRadioModule } from '@angular/material/radio';//for radio button
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentAreaComponent,
    GroupFormComponent,
    ForumComponent,
    MostConnectedComponent,
    TagSearchComponent,
    TrendingComponent,
    DepartmentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatChipsModule,
    InfiniteScrollModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot(),
    RouterModule,
    AppRouterModule,
    GridStackModule,
    AngularFilePickerModule,//for picking a media
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ConnectPeopleService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    TrendsdataService,
    MatMenuTrigger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
