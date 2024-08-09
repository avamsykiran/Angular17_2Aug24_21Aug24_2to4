import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverable]',
  standalone: true
})
export class HoverableDirective {

  @Input()
  appHoverable!:string;

  private orgBgColor:string;
  private myBgColor:string;

  constructor(private ele:ElementRef) {
    this.orgBgColor = ele.nativeElement.style.backgroundColor;
    this.myBgColor = "#00ff00";
  }

  ngOnChanges(){
    if(this.appHoverable){
      this.myBgColor=this.appHoverable;
    }
  }

  @HostListener("mouseover")
  changeToMyColor(){
    this.ele.nativeElement.style.backgroundColor=this.myBgColor;
  }

  @HostListener("mouseleave")
  changeToOrgColor(){
    this.ele.nativeElement.style.backgroundColor=this.orgBgColor;
  }
}
