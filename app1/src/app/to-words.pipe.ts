import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWords',
  standalone: true
})
export class ToWordsPipe implements PipeTransform {

  private digits : string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO",
      "THREE","FOUR","FIVE",
      "SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result = "";

    let valueStr = String(value);

    for(let i=0;i<valueStr.length;i++){
      let ch = valueStr.charAt(i); //we will get the ith digit or symbol 
      if("."===ch){
        result = `${result} dot`;
      }else{
        result = `${result} ${this.digits[Number(ch)]}`; //convert ch to a number to use as an index and extract the digit name
      }
    }

    return result;
  }

}
