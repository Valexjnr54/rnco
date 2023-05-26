import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-product-card',
  templateUrl: './admin-product-card.component.html',
  styleUrls: ['./admin-product-card.component.scss']
})
export class AdminProductCardComponent implements OnInit {
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
