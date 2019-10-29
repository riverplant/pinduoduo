import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  private _username = "";
  @Output() usernameChange = new EventEmitter;
  
  //自定义注解
  @Emoji() result = 'hello';

  constructor() { }

  ngOnInit() {
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
}
