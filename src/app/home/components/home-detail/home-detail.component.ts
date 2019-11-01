import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink;
  constructor(private router :ActivatedRoute , private service : HomeService , private cd : ChangeDetectorRef) { 

  }
  imageSliders:ImageSlider[] = [];
    channels: Channel[] = [];
  
  //http://localhost:4200/home/hot;name=zhangsan?proId=2&userId=10
  ngOnInit() {
    //banners
     this.service.getImageSlider().subscribe(
      banners => {
        this.imageSliders = banners;
      }
    );
    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
    });
    /**
     * params:
        name: "zhangsan"
        tabLink: "hot"
     */
    this.router.paramMap.subscribe(params =>{
      console.log('params',params);
      this.selectedTabLink = params.get('tabLink');
      //console.log('selectedTabLink',this.selectedTabLink);
      this.cd.markForCheck();
      
    });
    /**
     * params:
         proId: "2"
         userId: "10"
     */
    this.router.queryParamMap.subscribe(params =>{
      console.log('queryParamMap',params);
    });
    //查询结果可以并存
  }

}
