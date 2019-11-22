import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SrollableTabComponent , ImagerSlliderComponent , HorizontalGridComponent, CountDownComponent, FooterComponent } from './component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';




@NgModule({
  declarations: [
    SrollableTabComponent,
    ImagerSlliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    CountDownComponent,
    AgoPipe,
    FooterComponent
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
    CountDownComponent,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    FooterComponent
  ]
})
export class SharedModule { }
