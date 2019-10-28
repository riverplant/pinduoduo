import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SrollableTabComponent , ImagerSlliderComponent , HorizontalGridComponent } from './component';



@NgModule({
  declarations: [
    SrollableTabComponent,
    ImagerSlliderComponent,
    HorizontalGridComponent
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
    HorizontalGridComponent
  ]
})
export class SharedModule { }
