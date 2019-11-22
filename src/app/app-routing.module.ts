import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/components/home-container';




/**
 * 路由
 */
const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' }
    
];
/**
 * 
 */
@NgModule({
    //通过enableTracing: true启动路由监测,通过NavigationEnd来获取导航参数
    imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
