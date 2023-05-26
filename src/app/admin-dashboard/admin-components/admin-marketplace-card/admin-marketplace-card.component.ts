import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-admin-marketplace-card',
  templateUrl: './admin-marketplace-card.component.html',
  styleUrls: ['./admin-marketplace-card.component.scss']
})
export class AdminMarketplaceCardComponent implements OnInit {
  @Input() Products: object
  @Input()  ProductImage: object;
  @Input() fromAffiliate: boolean
  @Input() affiliateId: any
  @Input() affiliateName: any
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
