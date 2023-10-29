import { Component } from '@angular/core';

interface PackageInfo {
  height: string;
  weight: string;
  length: string;
  width: string;
  origin: string;
  destination: string;
  discountCode?: string;
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
    discountCode: ''
  };


  finalPrice!: number;
  discountPrice!: number;

  vec1: string[] = ["Asia", "Africa", "Norteamérica", "Europa", "Oceanía", "Sudamérica", "Antártida", "Regiones polares", "Centroamérica"];

  ngOnInit() {

    function getCombinations(arr: string[]): string[][] {
      const combinations: string[][] = [];
    
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          combinations.push([`${arr[i]} - ${arr[j]}`]);
        }
      }
      return combinations;
    }
    
    const combinations = getCombinations(this.vec1);
    
    console.log(combinations);
  }

  handleClick() {

    console.log(this.packageInfo)


  }

  calculateDiscount(originalPrice: number, clientLevel: string): number {

    if (clientLevel === 'premium') {
      let discount: number | null = null;
      discount = originalPrice * 0.10;
      return this.discountPrice = originalPrice - discount
    } else if (clientLevel === 'vip') {
      let discount: number | null = null;
      discount = originalPrice * 0.15;
      return this.discountPrice = originalPrice - discount
    }
    return originalPrice
  }
}
