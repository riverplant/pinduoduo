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
  @Input() futureDate = new Date();
  //1秒 = 1000 毫秒
  private _MS_PER_SECOND = 1000;
  conutDown$: Observable<String>;
  constructor() { }

  ngOnInit() {
    this.conutDown$ =  this.getCountDownObervable(this.startDate,this.futureDate);  
  }


  private diffInSec = (start: Date, future: Date) : number=> {
    const diff = future.getTime() - start.getTime();

    return Math.floor(diff / this._MS_PER_SECOND );
  } 

  private getCountDownObervable(start: Date, future: Date){
      return interval(1000).pipe(
        map(elapse => this.diffInSec(this.startDate,this.futureDate)-elapse),
        takeWhile(gap => gap >= 0),//takeWhile(expression): 当表达式为真,订阅流,当 false 结束流
        tap(val => console.log(val)),
        map(sec => {
          return {
            day: Math.floor(sec / 3600 / 24),
            hour: Math.floor((sec / 3600) % 24),
            minute: Math.floor((sec / 60) % 24),
            second: Math.floor(sec % 60),
          }
        }),
        tap(val => console.log(val)),
        map(({hour,minute,second})=> `${hour}:${minute}:${second}`)
      );//interval
  }
}
