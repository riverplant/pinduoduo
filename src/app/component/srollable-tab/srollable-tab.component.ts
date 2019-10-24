import { Component, OnInit } from '@angular/core';
interface TopMenu {
  title: string;
  link?: string;
}

interface AddFunc {
  (x: number , y: number):number
}

interface Dict {
  [key: string]: string;
}
@Component({
  selector: 'app-srollable-tab',
  templateUrl: './srollable-tab.component.html',
  styleUrls: ['./srollable-tab.component.css']
})
export class SrollableTabComponent implements OnInit {

  ngOnInit() {
  }

  selectedIndex = -1;
  title = 'pinduoduo';
  menus: TopMenu[] = [
    {
    title:'remeng',
    link:''
    },
    {
    title:'nanzhuang',
    link:''
    },
    {
    title:'shouji',
    link:'' 
    },
    {
    title:'yundong',
    link:'' 
    },
    {
    title:'jiafang',
    link:'' 
    },
    {
    title:'baihuo',
    link:'' 
     },
     {
      title:'diannao',
      link:'' 
      },
      {
      title:'neiyi',
      link:'' 
      },
      {
      title:'muying',
      link:'' 
      }];

add: AddFunc = (x,y) => x + y ;

dict : Dict = {
  a: "1",
  b: "2"
}

constructor() {
  console.log(this.dict.a);
}

handleSelection(index: number){
  this.selectedIndex = index;
}
}
