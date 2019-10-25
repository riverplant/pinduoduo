import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SrollableTabComponent, ImagerSlliderComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
    SrollableTabComponent,
    ImagerSlliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
