import { Component, OnInit, ViewChildren } from '@angular/core';
import { ImagerSlliderComponent, TopMenu } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  scrollableTabBgColor = 'cornsilk';
  //@ViewChild('ImagerSlliderComponent', {static:true})
  //imageSlider: ImagerSlliderComponent;
  @ViewChildren('imageSlider')
  imgSlider:ImagerSlliderComponent;
  
  topMenus : TopMenu[] = [
    {
      title:'remeng',
      link:'hot',
      id:1
      },
      {
      title:'nanzhuang',
      link:'men',
      id:2
      },
      {
      title:'shouji',
      link:'mobile' ,
      id:3
      },
      {
      title:'yundong',
      link:'sport' ,
      id:4
      },
      {
      title:'jiafang',
      link:'maison' ,
      id:5
      },
      {
      title:'baihuo',
      link:'department' ,
      id:6
       },
       {
        title:'diannao',
        link:'pc' ,
        id:7
        },
        {
        title:'neiyi',
        link:'linge' ,
        id:8
        },
        {
        title:'muying',
        link:'enfant' ,
        id:9
        }
      ];
      

  constructor(private router : Router) { }

  ngOnInit() {
  }
  handleTabSelection(tabMenu : TopMenu){
   // const colors  = ['red','blue','black'];
  //  const idx = Math.floor(Math.random()*3);
   // this.scrollableTabBgColor= colors[idx];
   // console.log(colors[idx]);
     console.log('tabMenu',tabMenu);
    this.router.navigate(['home',tabMenu.link])
  }
}
