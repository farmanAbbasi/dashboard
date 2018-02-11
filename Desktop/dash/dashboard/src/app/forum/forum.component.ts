import { Component} from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { exit } from 'process';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  panelOpenState: boolean = false;//step 3 expansion
  alreadyLiked: boolean=false;
  toCommentValue: boolean=false;
  thought="";
  thoughtToShare=[];
  likeButton:string="likes";
  postButton:string="click to add comment";
  
  dataContent=[];
  found:boolean;
  toShare=false;
  shared=true;
  id:number=1;
  i:number;
  likesCount:number=0;
  j:number=0;
  jj:number=0;
  commentLength:number=0;
  value = 'Clear me';
  commentCount:number=0;
  text:string;

  constructor() { }

  ngOnInit() {
  }
  deleteThought()
  {
      this.thought="";
     // this.shared=true;
  
  }
  onThoughtKeyUp(event :any)
  {
    this.thought=event.target.value;
  }
  shareThought()
  { 
      if(this.shared==true &&this.thought.length!=0)
      {
        this.toShare=true;
        if(this.toShare==true)
        {
          this.thoughtToShare[this.j]=this.thought;
          this.j=this.j+1;
          this.deleteThought();
         //this.toShare=true;
        }
        
      }
    }
    dog=[
    
      {
        "name": "Person1",
        "desc":"good Person "
      },
      {
        "name": "Person2",
        "desc":"good Person "
      },
      {
        "name": "Person3",
        "desc":"good Person "
      },
      {
        "name": "Person4",
        "desc":"good Person "
      },
      {
        "name": "Person5",
        "desc":"good Person "
      },
      {
        "name": "Person6",
        "desc":"goodPerson "
      },
      {
        "name": "Person7",
        "desc":"good Person "
      },
      {
        "name": "Person8",
        "desc":"good Person "
      },
      {
        "name": "Person9",
        "desc":"good Person "
      },
      {
        "name": "Person10",
        "desc":"good Person "
      },
      {
        "name": "Person11",
        "desc":"good Person "
      },
      {
        "name": "Person12",
        "desc":"good Person "
      },
      {
        "name": "Person13",
        "desc":"good Person "
      },
      {
        "name": "Person14",
        "desc":"good Person"
      },
      {
        "name": "Person15",
        "desc":"good Person"
      },
      {
        "name": "Person16",
        "desc":"good Person "
      },
      {
        "name": "Person17",
        "desc":"good Person"},
      {
        "name": "Person18",
        "desc":"good Person"
      },
      {
        "name": "Person19",
        "desc":"good Person"
      },
      {
        "name": "Person20",
        "desc":"good Person"
      },
      {
        "name": "Person21",
        "desc":"good Person "
      },
      {
        "name": "Person22",
        "desc":"good Person "
      },
      {
        "name": "Person23",
        "desc":"good Person "
      },
      {
        "name": "Person24",
        "desc":"good Person "
      },
      {
        "name": "Person25",
        "desc":"good Person "
      },
      {
        "name": "Person26",
        "desc":"goodPerson "
      },
      {
        "name": "Person27",
        "desc":"good Person "
      },
      {
        "name": "Person28",
        "desc":"good Person "
      },
      {
        "name": "Person29",
        "desc":"good Person "
      },
      {
        "name": "Person30",
        "desc":"good Person "
      },
      {
        "name": "Person31",
        "desc":"good Person "
      },
      {
        "name": "Person32",
        "desc":"good Person "
      },
      {
        "name": "Person33",
        "desc":"good Person "
      },
      {
        "name": "Person34",
        "desc":"good Person"
      },
      {
        "name": "Person35",
        "desc":"good Person"
      },
      {
        "name": "Person36",
        "desc":"good Person "
      },
      {
        "name": "Person37",
        "desc":"good Person"},
      {
        "name": "Person38",
        "desc":"good Person"
      },
      {
        "name": "Person39",
        "desc":"good Person"
      },
      {
        "name": "Person40",
        "desc":"good Person"
      }
  
    ];

    private noOfItemsToShowInitially: number = 1;

    private itemsToLoad: number = 5;
  
    public itemsToShow = this.dog.slice(0, this.noOfItemsToShowInitially);
  
    public isFullListDisplayed: boolean = false;
  
    onScroll() {
  
      if (this.noOfItemsToShowInitially <= this.dog.length) {
  
        this.noOfItemsToShowInitially += this.itemsToLoad;
  
        this.itemsToShow = this.dog.slice(0, this.noOfItemsToShowInitially);
  
        console.log("scrolled");
  
      } else {
  
        this.isFullListDisplayed = true;
  
      }
  
    }
    




    





    
}
