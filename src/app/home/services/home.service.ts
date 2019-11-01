import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
/**
 * 创建服务
 */
@Injectable({
    providedIn: 'root'//直接放入root,不需要再在home.module.ts的providers中
})
export class HomeService {
  constructor(private http: HttpClient){

  }

          getTabs() {
            return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
          }

          getImageSlider() {
            return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
        }

        getChannels() {
          return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
        }
}