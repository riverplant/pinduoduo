import { Component, ViewChild, ViewChildren , ElementRef } from '@angular/core';
import { TopMenu } from './component';
import { ImageSlider } from './component';
import { ImagerSlliderComponent } from './component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scrollableTabBgColor = 'cornsilk';

  //@ViewChild('ImagerSlliderComponent', {static:true})
  //imageSlider: ImagerSlliderComponent;
  @ViewChildren('imageSlider')
  imgSlider:ImagerSlliderComponent;

  topMenus : TopMenu[] = [
    {
      title:'remeng',
      link:'#'
      },
      {
      title:'nanzhuang',
      link:'#'
      },
      {
      title:'shouji',
      link:'#' 
      },
      {
      title:'yundong',
      link:'#' 
      },
      {
      title:'jiafang',
      link:'#' 
      },
      {
      title:'baihuo',
      link:'#' 
       },
       {
        title:'diannao',
        link:'#' 
        },
        {
        title:'neiyi',
        link:'#' 
        },
        {
        title:'muying',
        link:'#' 
        }
      ];
      imageSliders:ImageSlider[] = [
        {
           imgUrl:'',
           link:'',
           caption:''
         },
         {
          imgUrl:'',
          link:'',
          caption:''
        },
        {
          imgUrl:'',
          link:'',
          caption:''
        },
        {
          imgUrl:'',
          link:'',
          caption:''
        },
        {
          imgUrl:'',
          link:'',
          caption:''
        }];
      handleTabSelection(tabMenu : TopMenu){
        const colors  = ['red','blue','black'];
        const idx = Math.floor(Math.random()*3);
        this.scrollableTabBgColor= colors[idx];
        console.log(colors[idx]);
         console.log(tabMenu);
      }
}
