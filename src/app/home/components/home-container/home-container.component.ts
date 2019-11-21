import { Component, OnInit, ViewChildren, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ImagerSlliderComponent, TopMenu } from 'src/app/shared';
import { Router } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  scrollableTabBgColor = 'cornsilk';
  //@ViewChild('ImagerSlliderComponent', {static:true})
  //imageSlider: ImagerSlliderComponent;
  @ViewChildren('imageSlider')
  imgSlider:ImagerSlliderComponent;
  
  topMenus$ : Observable<TopMenu[]>;
    
  constructor(private router : Router, private service : HomeService ,@Inject(token)private baseUrl: string) { 

  }
  /**
   * 通过service中定义的HomeService调用REST API
   * 因为ANGULAR的HTTP使用的是异步方法,所以需要使用subscribe进行订阅
   */
  ngOnInit() {
      this.topMenus$ = this.service.getTabs();  
  }
  /**
   * 处理菜单点击事件
   * @param tabMenu 
   */
  handleTabSelection(tabMenu : TopMenu){
   // const colors  = ['red','blue','black'];
  //  const idx = Math.floor(Math.random()*3);
   // this.scrollableTabBgColor= colors[idx];
   // console.log(colors[idx]);
     console.log('tabMenu',tabMenu);
    this.router.navigate(['home',tabMenu.link])
  }
}
