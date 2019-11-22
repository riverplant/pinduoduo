import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
/**
 * 
 */
export class CountDownComponent implements OnInit {

  @Input() startDate = new Date();
  @Input() futureDate :Date;
  //1秒 = 1000 毫秒
  private _MS_PER_SECOND = 1000;
  conutDown$: Observable<String>;

  constructor() { 

  }

  ngOnInit() {
    this.conutDown$ =  this.getCountDownObervable(this.startDate,this.futureDate);  
   // this.conutDown$ =  interval(1000).pipe(map(elapse =>`${elapse}`));
  }

/**
 * 获得两个时间的差值
 *  private diffInSec = (start: Date, future: Date){}
 */
  private diffInSec = (start: Date, future: Date) : number=> {
    //getTime():得到毫秒值
    const diff = future.getTime() - start.getTime();

    return Math.floor(diff / this._MS_PER_SECOND );
  } 
   /**
    * 获得倒计时Observable
    * @param start 
    * @param future 
    */
  private getCountDownObervable(start: Date, future: Date){

      //interval: 定时Observable, 每隔定义的时间产生一个数字并且加1
      return interval(1000).pipe(
        //用已经设置的两个时间的差值 - elapse(已经过去的时间),得到一个数字
        map(elapse => this.diffInSec(this.startDate,this.futureDate)-elapse),

        takeWhile(gap => gap >= 0),//takeWhile(expression): 当表达式为真,订阅流,当 false 结束流(filter 不能结束流)
        //在Stream 中间进行操作, 例如用于打印日志
        tap(val => console.log(val)),
        //转换成一个对象
        map(sec => {
          return {
            day: Math.floor(sec / 3600 / 24),
            hour: Math.floor((sec / 3600) % 24),
            minute: Math.floor((sec / 60) % 60),
            second: Math.floor(sec % 60),
          }
        }),
        tap(val => console.log(val)),
        //将对象转换成String
        map(({hour,minute,second})=> `${hour}:${minute}:${second}`)
      );//interval
  }
}
