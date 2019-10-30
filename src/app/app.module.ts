import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import {  HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import { MyModule } from './my/my.module';
import { ProductModule } from './product/product.module';
import { RecommendModule } from './recommend/recommend.module';
import { HomeRoutingModule } from './home/home-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    FormsModule , 
    SharedModule ,
    RouterModule,
    MyModule,
    ProductModule,
    RecommendModule,
    HomeModule,
    AppRoutingModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
