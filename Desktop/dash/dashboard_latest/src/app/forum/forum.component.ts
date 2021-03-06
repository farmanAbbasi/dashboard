import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { exit } from 'process';
import { dog } from './datadog';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { pollSeries } from './polls_model';////step 1

var pollSeriesModel=new pollSeries;

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

  checkedBool  = false;
  checkedBoolArray = [];

  oRadio = [];
  o1 = false;
  o2 = false;
  o3 = false;
  k = 1;
  check = 0;

  constructor() { }


  /////////////////////////////////////changed////////////////////////////////////////////////
  ngOnInit() {
   }
   
   setMultipleChoicePoll() {
     if(this.checkedBool==false)
    {  
       this.checkedBool=true;
      // console.log(this.checkedBool)
      
    }
    else{
         this.checkedBool=false;
        // console.log(this.checkedBool);
    }
   }
 


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

  
  deleteThought() {
    this.thought = '';
    this.arrayOption1 = '';
    this.arrayOption2 = '';
    this.arrayOption3 = '';
    this.arrayOption4 = '';
  }

  deletePollQuestion() {
    this.pollQuestion = '';
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
  }
  onOption2KeyUp(event: any) {
    this.arrayOption2 = event.target.value;
  }
  onOption3KeyUp(event: any) {
    this.arrayOption3 = event.target.value;
  }
  onOption4KeyUp(event: any) {
    this.arrayOption4 = event.target.value;
  }

  iii = 0;
  

  sharePoll() {
    if (this.pollQuestion.length !== 0) {
      this.optionsToShare[this.iii] = this.pollQuestion;
      this.arrayOptionAll[(this.iii * 4) + 0] = this.arrayOption1;
      this.arrayOptionAll[(this.iii * 4) + 1] = this.arrayOption2;
      this.arrayOptionAll[(this.iii * 4) + 2] = this.arrayOption3;
      this.arrayOptionAll[(this.iii * 4) + 3] = this.arrayOption4;
      console.log(this.arrayOptionAll[0]);
      console.log(this.arrayOptionAll[1]);
      console.log(this.arrayOptionAll[2]);
      console.log(this.arrayOptionAll[3]);
      this.iii++;
      //fifth place pe multiple or singl option true ya false save hogi
      this.pollShareFlag = true;
     
    }

    
    pollSeriesModel.pollquestion=this.pollQuestion;
    pollSeriesModel.choices=this.arrayOptionAll;
    pollSeriesModel.ismultiplechoice=this.checkedBool;
    console.log(pollSeriesModel.pollquestion);
    console.log(pollSeriesModel.choices);  
    console.log(pollSeriesModel.ismultiplechoice);
    var stringIs=JSON.stringify(pollSeriesModel);
    console.log(stringIs);

  this.deletePollQuestion();
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
