import { Directive, ElementRef, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appToday]',
  providers:[DatePipe],
  standalone: true
})
export class TodayDirective {

  @Input()
  appToday!: string;

  dp:DatePipe;

  constructor(private ele: ElementRef) {
    this.dp = inject(DatePipe);
    ele.nativeElement.innerText = new Date().toString();
  }

  ngOnChanges() {
    if(this.appToday){
      this.ele.nativeElement.innerText = this.dp.transform(new Date(),this.appToday);
    }
  }
}
