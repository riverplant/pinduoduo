import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent } from './components';

/**
 * <a[routerLink]="['/home',tab.link, {name:'val1'}]">...</a>
 *  <a[routerLink]="['/home]"[quweryParams]={name:'val1'}]">...</a>
 * this.router.navigate(['home',tab.link, {name:'val1'}])
 * 
 * URL:
 * http://..../home/sports;name=val1;...
 * http://..../home/sports?name=val1&...
 * 
 * load:
 * this.route.paramsMap.subscribe(params=>{...});
 * this.route.queryParamsMap.subscribe(params=>{...});
 */

const routes: Routes = [
  {
    path:'home',
    component:HomeContainerComponent,
    children:[
      {
        path:'',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path:':tabLink',
        component:HomeDetailComponent,
        children:[
          {
            path:':grand',
            component:HomeGrandComponent
          },
          {
            path:':aux',
            component:HomeAuxComponent,
            outlet: 'second'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
