import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'models/product';

@Component({
  selector: 'app-aff-product-card',
  templateUrl: './aff-product-card.component.html',
  styleUrls: ['./aff-product-card.component.scss']
})
export class AffProductCardComponent implements OnInit {
  @Input() Products: object
  constructor() { }
  Image: any
  ngOnInit(): void {
    this.getFirstProductImage()
  }
  getFirstProductImage(){
    const data = this.Products['productImages']
    data.forEach((element, index) => {
      if(index === 0){
        this.Image = element.imageUrl
      }
    });
  }
}
