import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  /**
   * 将selectedTabLink$定义为Observable<string>,在前端获取需要使用Async管道
   * selectedTabLink$ | Async
   */
  selectedTabLink$: Observable<string>;
  constructor(private router :ActivatedRoute , private service : HomeService , private cd : ChangeDetectorRef) { 

  }
  imageSliders$:Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  subs: Subscription;
  
  //http://localhost:4200/home/hot;name=zhangsan?proId=2&userId=10
  ngOnInit() {
    /**
     * params:
        name: "zhangsan"
        tabLink: "hot" 路径参数
     */
    this.selectedTabLink$ =  this.router.paramMap 
      .pipe(
        filter(params=>params.has("tabLink")),//通过filter进行判断
        map(params => params.get('tabLink')) // 通过map进行筛选,只留下tabLink
      );
  
       //banners
    this.imageSliders$ = this.service.getImageSlider();
    //channels
    this.channels$ = this.service.getChannels();   

    this.subs = this.router.paramMap.subscribe(param => {
      console.log('查询参数', param);
   });
   
  }
 
  ngOnDestroy(): void{
   this.subs.unsubscribe();//如果使用了subscribe,需要unsubscribe防止内存泄露
  }
}
