import { Component, OnInit, ViewChildren, Inject } from '@angular/core';
import { ImagerSlliderComponent, TopMenu } from 'src/app/shared';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';

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
  
  topMenus : TopMenu[] = [];
    
  constructor(private router : Router, private service : HomeService ,@Inject(token)private baseUrl: string) { 

  }

  ngOnInit() {
      this.topMenus = this.service.getTabs();
      
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
