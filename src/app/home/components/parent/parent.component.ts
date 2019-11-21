import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef : ElementRef;

  constructor() { }

  ngOnInit() {
    //fromEvent:rxjs函数,用于监测HTML元素的事件,例如将input事件转化为Stream
    /**
     * 流的种类:无限|有限|单个|空
     * 流的状态: next | error | complete
     * rxjs 所有的操作都是异步
     * this.route.paraMap.subscrible
     * (
     *   [next]: param=>{},
     *   [err]: err=> {},
     *   [complete]: ()=>{} 
     * );
     */
    fromEvent(this.inputRef.nativeElement,'input')
    .subscribe((ev:any)=> console.log(ev.target.value));
  }

   handleClick(){

   }
}
