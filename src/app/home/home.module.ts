import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent,HomeGrandComponent, HomeAuxComponent, ParentComponent, ChildComponent } from './components';
import { token } from './services';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent, ChildComponent],
  providers:[
   // HomeService,
    {
      provide: token,
      useValue:'http://localhost:9090'
    }
    /**
     * 在模块中提供需要注入的服务
     * {
          provide: Product,
          useFactory: ()=>{
            return new Product('dami','black');
          },
          deps:[]
        },
        PurchaseOrder
     */
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
