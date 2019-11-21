import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import {tap} from 'rxjs/operators'
@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //pipe: 对处理完的结果进行下一步处理
        return next.handle(req).pipe(
            //tap: 对HttpEvent进行下一步处理
            tap((event:HttpEvent<any>) => {
if(event instanceof HttpResponse && event.status >= 200 && event.status < 300){
    /**
     * 在请求的返回结果中拦截
     */
         console.log('success.....');
           }
            })
        );
    }
}