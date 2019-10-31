import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';
import { ProductModule } from 'src/app/product/product.module';
import { token } from '../../services';

@Injectable()//可注入类
class Product {
  constructor(private name: string, private color: string){

  }
}
@Injectable()//可注入类
class PurchaseOrder {
  private product : Product;
  private amount: number;
  constructor(){
    this.product = new Product("dami","black");
  }
}
@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = { productId: 2, productName:'pname',model:'m1', type:'t1'};
  date: Date;
  price: number;
  data = [1,2,3,4,5];

  constructor() {}


  ngOnInit() {
    this.date = this.minusDays(new Date(),60);
    this.price = 123.32;
    //singleTon
    const injector = Injector.create({
      providers:[
        {
          provide: Product,
          useFactory: ()=>{
            return new Product('dami','black');
          },
          deps:[]
        },
        {
          provide: PurchaseOrder,
          //useClass:PurchaseOrder,
          deps:[Product]//构造PurchaseOrder类需要用到池子里的Product
        },
        {
          provide: token,
          useValue:'http://localhost:9090'
        }
      ]
    })
    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    console.log(injector.get(token));
  }

  minusDays(date: Date, days:number){
    const result = new Date(date);
    result.setDate(result.getDate()-days);
    return result;
  }

  minusMonths(date: Date, month:number){
    const result = new Date(date);
    result.setMonth(result.getMonth()-month);
    return result;
  }

  
}
