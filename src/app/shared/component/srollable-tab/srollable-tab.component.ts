import { Component, OnInit, Input, Output, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnDestroy } from '@angular/core';



export interface TopMenu {
  title: string;
  link?: string;
  id:number
}
interface AddFunc {
  (x: number , y: number):number
}

interface Dict {
  [key: string]: string;
}
@Component({
  selector: 'app-srollable-tab',
  templateUrl: './srollable-tab.component.html',
  styleUrls: ['./srollable-tab.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SrollableTabComponent implements OnInit , OnChanges , AfterContentInit , AfterViewInit ,OnDestroy {
  /**
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  /**
   * init component
   */
  ngOnInit() {
    console.log("init...");
  }

  ngAfterContentInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  console.log("after ng-content...");
}
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log("content + ng-content...");
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log("ngOnDestroy...");
}
  title = 'pinduoduo';
  @Input() selectedTabLink: string;
  @Input() menus: TopMenu[] = [];
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Input() backgroudColor = 'cornsilk';
  @Output() tabSelected = new EventEmitter()
add: AddFunc = (x,y) => x + y ;

dict : Dict = {
  a: "1",
  b: "2"
}
/***
 * run first
 */
constructor() {
  //console.log(this.dict.a);
}

handleSelection(index: number){
 
  this.tabSelected.emit(this.menus[index]);
}
}
