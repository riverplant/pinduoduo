import { Component, OnInit, Input, Output, AfterContentInit, ViewChild, ElementRef, ViewChildren ,QueryList, Renderer2, AfterViewInit ,OnDestroy } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string
}
@Component({
  selector: 'app-imager-sllider',
  templateUrl: './imager-sllider.component.html',
  styleUrls: ['./imager-sllider.component.css']
})
export class ImagerSlliderComponent implements OnInit , AfterViewInit, OnDestroy{

 
  selectedIndex = 0;
  intervalId;

  @Input() sliders: ImageSlider[] = [];
  @Input() slideHeight = '100px';
  @Input() intervalBySeconds = 2;//seconds
  @ViewChild('imageSlider' , {static:true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs:QueryList<ElementRef>;

  constructor(private rd2:Renderer2) {}

  ngOnInit() {
    console.log('ngOnInit',  this.imgSlider);
    //this.imgSlider.nativeElement.innerHTML = '<span> hello </span>';

  }

  ngAfterViewInit(): void {
   this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement,'height','100px');
      //this.rd2.setStyle(item.nativeElement,'width','400px');
    });

  /**
   * 轮播Carousel
   */
    this.intervalId = setInterval(() =>{    
      /**
       * @param el — The elemen
         @param name — The property name
         @param value — The new value.
       */
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        'scrollLeft', //scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。
        //1/3, 2/3, 3/3
        (( this.getIndex(++this.selectedIndex) )* this.imgSlider.nativeElement.scrollWidth) /this.sliders.length );
    },this.intervalBySeconds * 1000);

  }//ngAfterViewInit

  ngOnDestroy(): void {
   clearInterval(this.intervalId);
  }

  getIndex(idx :number): number {
    //console.log('idx',idx);
    return idx >=0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length ;
  }
  handleScroll(ev) {
    //console.log('ev.target.scrollLeft',ev.target.scrollLeft);
    ////获取滚动条到元素左边的距离: var sLeft = element.scrollLeft;
    //设置滚动条滚动了多少像素: element.scrollLeft = 10;
    //var xScrollWidth = element.scrollWidth:元素的内容宽度
   const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth ;
   //console.log('ev.target.scrollLeft',ev.target.scrollLeft);//0~828
   //console.log('this.sliders.length', this.sliders.length);//3
   //console.log('ev.target.scrollWidth', ev.target.scrollWidth);//1242
   this.selectedIndex = Math.round(ratio);
  }

}
