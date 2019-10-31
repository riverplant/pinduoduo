import { Component, OnInit } from '@angular/core';
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
  constructor(private router :ActivatedRoute , private service : HomeService) { 

  }
  imageSliders:ImageSlider[] = [];
    channels: Channel[] = [];
  
  //http://localhost:4200/home/hot;name=zhangsan?proId=2&userId=10
  ngOnInit() {
    this.imageSliders = this.service.getImageSlider();
    this.channels = this.service.getChannels();
    /**
     * params:
        name: "zhangsan"
        tabLink: "hot"
     */
    this.router.paramMap.subscribe(params =>{
      console.log('params',params);
      this.selectedTabLink = params.get('tabLink');
      //console.log('selectedTabLink',this.selectedTabLink);
      
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
