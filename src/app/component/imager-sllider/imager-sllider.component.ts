import { Component, OnInit, Input, Output, AfterContentInit, ViewChild, ElementRef, ViewChildren ,QueryList, Renderer2} from '@angular/core';

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
export class ImagerSlliderComponent implements OnInit {

  selectedIndex = 0;
  @Input() sliders: ImageSlider[] = [];
  @Input() slideHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider' , {static:true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs:QueryList<ElementRef>;
  constructor(private rd2:Renderer2) { 

  }

  ngOnInit() {
    console.log("imgSlider:" + this.imgSlider.nativeElement);
    //this.imgSlider.nativeElement.innerHTML = '<span> hello </span>';

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.imgs);
    //this.imgs.forEach(item => item.nativeElement.style.height = '100px');
   this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement,'height','100px');
    });
    
   let i = 0;
    setInterval(() =>{    
      /**
       * @param el — The element.

         @param name — The property name.

         @param value — The new value.
       */
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        'scrollLeft', 
        ((++this.selectedIndex % this.sliders.length )* this.imgSlider.nativeElement.scrollWidth) /this.sliders.length );
    },this.intervalBySeconds);

  }

  handleScroll(ev){
   const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth ;
   this.selectedIndex = Math.round(ratio);
  }

}
