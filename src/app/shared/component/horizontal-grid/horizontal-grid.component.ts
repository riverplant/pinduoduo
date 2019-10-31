import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
  alt?: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 7;
  @Input() displayCols = 5;
  slidermargin = '0';

  channels: Channel[] = [];
  private _username = "";
  @Output() usernameChange = new EventEmitter;
  
  //自定义注解
  @Emoji() result = 'hello';

  constructor() { }

  ngOnInit() {
  }

  public get scrollable() : boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows() : string {
    //minmax(auto,max-content): 设置取值范围
    return `minmax(auto,max-content)`;
  }

  public get templateColumns() : string {
    return `repeat(
      ${this.cols},
      calc((100vw - ${this.displayCols * 0.4}rem)/${this.displayCols})
      )`;
  }

  @Input()
  public get username() : string {
    return  this._username;
  }

 
 public set username(username : string) {
   this._username = username;
   this.usernameChange.emit(username);
 }
 
 @Confirmable('are u sur?')
 handleClick(){
   console.log("clicked...");
 }

 handleScroll(ev){
   this.slidermargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`;
 }
}
