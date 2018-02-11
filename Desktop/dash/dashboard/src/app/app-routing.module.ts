import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumComponent} from './forum/forum.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path :'forum',
    component : ForumComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
