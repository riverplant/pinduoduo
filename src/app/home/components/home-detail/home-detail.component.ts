import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink;
  constructor(private router :ActivatedRoute) { 

  }
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
  
  ngOnInit() {
    this.router.paramMap.subscribe(params =>{
      console.log('params',params);
      this.selectedTabLink = params.get('tabLink');
      console.log('selectedTabLink',this.selectedTabLink);
    })
  }

}
