import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

   _title: string;
   _time: number;

   @ViewChild('timeRef',{static:true}) timeRef: ElementRef

  
  public get title() : string {
    console.log("Dirty value detection");
    return this._title;
  }
  /**
   * 
   * @param ngZone :
   */
  constructor(private ngZone: NgZone, private rd: Renderer2) { 
    this._title = 'hi';
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {

    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
     this.rd.setProperty(
       this.timeRef.nativeElement,
      'innerText', 
      formatDate(Date.now(),'HH:mm:ss:SSS','en-US')//在类中使用管道
      );
    },100);
  });
   /**
    * 不可以在这里修改值,除非使用
    */
    //this.ngZone.runOutsideAngular(()=>{});
    /**setInterval(()=>{
      this._title = 'hello';
    },100);
    **/
  }

  
  public get time() : number {
    return this._time;
  }
  handleClick(ev){
    console.log('ev',ev);
    /**
     * 点击按钮触发脏检测
     */
  }
}
