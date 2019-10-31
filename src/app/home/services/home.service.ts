import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared';
/**
 * 创建服务
 */
@Injectable({
    providedIn: 'root'//直接放入root,不需要再在home.module.ts的providers中
})
export class HomeService {
    topMenus : TopMenu[] = [
        {
          title:'remeng',
          link:'hot',
          id:1
          },
          {
          title:'nanzhuang',
          link:'men',
          id:2
          },
          {
          title:'shouji',
          link:'mobile' ,
          id:3
          },
          {
          title:'yundong',
          link:'sport' ,
          id:4
          },
          {
          title:'jiafang',
          link:'maison' ,
          id:5
          },
          {
          title:'baihuo',
          link:'department' ,
          id:6
           },
           {
            title:'diannao',
            link:'pc' ,
            id:7
            },
            {
            title:'neiyi',
            link:'linge' ,
            id:8
            },
            {
            title:'muying',
            link:'enfant' ,
            id:9
            }
          ];

          imageSliders:ImageSlider[] = [
            {
               imgUrl:'https://www.runoob.com/wp-content/uploads/2014/07/slide1.png',
               link:'',
               caption:''
             },
             {
              imgUrl:'https://www.runoob.com/wp-content/uploads/2014/07/slide2.png',
              link:'',
              caption:''
            },
            {
              imgUrl:'https://www.runoob.com/wp-content/uploads/2014/07/slide3.png',
              link:'',
              caption:''
            }];
            channels: Channel[] = [
              {
                id: 1,
                title: 'item1',
                icon: '',
                link: 'item1'
              },
              {
                id: 2,
                title: 'item2',
                icon: '',
                link: 'item2'
              },
              {
                id: 3,
                title: 'item3',
                icon: '',
                link: 'item3'
              },
              {
                id: 4,
                title: 'item4',
                icon: '',
                link: 'item4'
              },
              {
                id: 5,
                title: 'item5',
                icon: '',
                link: 'item5'
              },
              {
                id: 6,
                title: 'item6',
                icon: '',
                link: 'item6'
              },
              {
                id: 7,
                title: 'item7',
                icon: '',
                link: 'item7'
              },
              {
                id: 8,
                title: 'item8',
                icon: '',
                link: 'item8'
              },
              {
                id: 9,
                title: 'item9',
                icon: '',
                link: 'item9'
              },
              {
                id: 10,
                title: 'item10',
                icon: '',
                link: 'item10'
              },
              {
                id: 11,
                title: 'item11',
                icon: '',
                link: 'item11'
              },
            ];

          getTabs() {
              return this.topMenus;
          }

          getImageSlider() {
            return this.imageSliders;
        }

        getChannels() {
            return this.channels;
        }
}