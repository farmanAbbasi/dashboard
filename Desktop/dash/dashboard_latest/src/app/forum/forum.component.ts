import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { exit } from 'process';
import { dog } from './datadog';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';


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
  selected = 'post';
  flagForPost = true;
  flagForPoll = false;
  arrayOption1 = '';
  arrayOption2 = '';
  arrayOption3 = '';
  arrayOption4 = '';
  arrayOptionAll = [];
  indexArrayOptionAll = 0;
  optionsToShare = [];
  ioption = 0;
  pollQuestion = '';
  pollShareFlag = false;

  o1 = false; o2 = false; o3 = false;
  k = 1;

  constructor() { }

  addBtnClicked() {
    if (this.k <= 3) {
      this.k = this.k - 1;
      if (this.k == 0)
        this.o1 = true;
      if (this.k == 1)
        this.o2 = true;
      if (this.k == 2)
        this.o3 = true;
      this.k += 2;
    }
  }
  //after all 4 btns appear k will be equal to 2
  minusBtnClicked() {
    if (this.k == 4) {
      this.o3 = false;
      this.arrayOption4 = '';
    }
    if (this.k == 3) {
      this.o2 = false;
      this.arrayOption3 = '';
    }
    if (this.k == 2) {
      this.o1 = false;
      this.arrayOption2 = '';
    }
    this.k--;
  }

  selectChangeHandler(event: any) {
    this.selected = event.target.value;
    if (this.selected == "post") {
      this.flagForPost = true;
      this.flagForPoll = false;
    } else if (this.selected == "poll") {
      this.flagForPoll = true;
      this.flagForPost = false;
    }
  }

  ngOnInit() {
  }
  deleteThought() {
    this.thought = '';
    // this.shared=true;
  }

  deletePollQuestion() {
    this.pollQuestion = '';
    /*
     this.arrayOption1=''; 
     this.arrayOption2='';
     this.arrayOption3='';
    this.arrayOption4='';
    */
  }

  onThoughtKeyUp(event: any) {
    this.thought = event.target.value;
    console.log('firedThrow');
  }
  onPollKeyUp(event: any) {
    this.pollQuestion = event.target.value;
    console.log('firedpoll');
  }

  onOption1KeyUp(event: any) {
    this.arrayOption1 = event.target.value;
    console.log('typing option 1');

  }
  onOption2KeyUp(event: any) {
    this.arrayOption2 = event.target.value;
    console.log('typing option 2');

  }
  onOption3KeyUp(event: any) {
    this.arrayOption3 = event.target.value;
    console.log('typing option 3');

  }
  onOption4KeyUp(event: any) {
    this.arrayOption4 = event.target.value;
    console.log('typing option 4');

  }

  iii = 0;
  newArrayForPoll = [][4];
  sharePoll() {
    if (this.pollQuestion.length !== 0  ) {
     
      this.optionsToShare[this.iii] = this.pollQuestion;
      this.iii++;
      this.arrayOptionAll[(this.iii*4)+0] = this.arrayOption1;
      this.arrayOptionAll[(this.iii*4)+1] = this.arrayOption2;
      this.arrayOptionAll[(this.iii*4)+2] = this.arrayOption3;
      this.arrayOptionAll[(this.iii*4)+3] = this.arrayOption4;
      this.pollShareFlag = true;
      this.deletePollQuestion();
    }
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
