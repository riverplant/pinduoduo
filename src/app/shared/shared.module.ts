import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SrollableTabComponent , ImagerSlliderComponent , HorizontalGridComponent } from './component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';




@NgModule({
  declarations: [
    SrollableTabComponent,
    ImagerSlliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    CommonModule, 
    FormsModule,
    SrollableTabComponent,
    ImagerSlliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
