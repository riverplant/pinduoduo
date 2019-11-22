import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {  HomeModule, ParamInterceptor, NotificationInterceptor } from './home';
import { AppRoutingModule } from './app-routing.module';
import { MyModule } from './my/my.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { RecommendModule } from './recommend/recommend.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CategoryModule } from './category';
import { ChatModule } from './chat';


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
    CategoryModule,
    ChatModule,
    MyModule,
    HomeModule,
    AppRoutingModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
   {
     provide:HTTP_INTERCEPTORS,
     useClass:ParamInterceptor,
     multi:true
   },
   {
    provide:HTTP_INTERCEPTORS,
    useClass:NotificationInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
