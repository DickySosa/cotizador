import { Component } from '@angular/core';

interface PackageInfo{
  height:string;
  weight:string;
  length:string;
  width:string;
  origin:string;
  destination:string;
  discountCode?:string;
}
@Component({
  selector: 'app-package-info',
  templateUrl: './package-info.component.html',
  styleUrls: ['./package-info.component.css']
})
export class PackageInfoComponent {

  packageInfo: PackageInfo = {
    height: '',
    weight: '',
    length: '',
    width: '',
    origin: '',
    destination: '',
    discountCode:''
  };


  finalPrice!:number;
  discountPrice!:number;


  handleClick (){

    console.log("hola")


  }

  calculateDiscount(originalPrice:number, clientLevel:string):number{

    if(clientLevel === 'premium'){
      let discount:number| null = null; 
      discount = originalPrice * 0.10;
      return this.discountPrice =  originalPrice - discount
    } else if (clientLevel === 'vip'){
      let discount:number| null = null; 
      discount = originalPrice * 0.15;
      return this.discountPrice =  originalPrice - discount
    }
    return originalPrice
  }
}
