import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush//笨组件
})
/**
 * 
 */
export class FooterComponent implements OnInit {

  tabItems :TabItem[] = [
    {
      title: 'home',
      icon:'/assets/tabs/home.png',
      link: 'home',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: 'recommand',
      icon:'/assets/tabs/recommend.png',
      link: 'recommand',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: 'category',
      icon:'/assets/tabs/category.png',
      link: 'category',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: 'chat',
      icon:'/assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: 'my',
      icon:'/assets/tabs/my.png',
      link: 'my',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
]

@Input() selectedIndex = 0;

//定义一个组件的输出函数,有父主键调用和处理
@Output() tabSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleSelectedTab(idx : number){
    this.selectedIndex = idx;
    //路由跳转封在父主键当中
    this.tabSelected.emit(this.tabItems[idx]);
  }
}
