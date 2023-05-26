import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() Products: object
  Image: any
  constructor() { }

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
