import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { exit } from 'process';
import { dog } from './datadog';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  private noOfItemsToShowInitially = 5;
  private itemsToLoad = 5;
  public itemsToShow = dog.slice(0, this.noOfItemsToShowInitially);
  public isFullListDisplayed = false;
  panelOpenState = false;
  alreadyLiked = false;
  toCommentValue = false;
  thought = '';
  thoughtToShare = [];
  likeButton = 'likes';
  postButton = 'click to add comment';

  dataContent = [];
  found: boolean;
  toShare = false;
  shared = true;
  id = 1;
  i: number;
  likesCount = 0;
  j = 0;
  jj = 0;
  commentLength = 0;
  value = 'Clear me';
  commentCount = 0;
  text: string;

  constructor() { }

  ngOnInit() {
  }
  deleteThought() {
    this.thought = '';
    // this.shared=true;
  }
  onThoughtKeyUp(event: any) {
    this.thought = event.target.value;
    console.log('firedThrow');
  }
  shareThought() {
    if (this.shared === true && this.thought.length !== 0) {
      this.toShare = true;
      if (this.toShare === true) {
        this.thoughtToShare[this.j] = this.thought;
        this.j = this.j + 1;
        this.deleteThought();
      }

    }
  }
  onScroll() {
    console.log('fired');

    if (this.noOfItemsToShowInitially <= dog.length) {

      this.noOfItemsToShowInitially += this.itemsToLoad;

      this.itemsToShow = dog.slice(0, this.noOfItemsToShowInitially);

      console.log('scrolled');

    } else {

      this.isFullListDisplayed = true;

    }

  }
  
}
