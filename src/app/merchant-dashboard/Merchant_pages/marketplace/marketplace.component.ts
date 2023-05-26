import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  productsItems: any = []
  ActiveCampaigns: any = []
  LeadingCampaigns: any  = []
  EstimatedFunds: any
  Image: any
  constructor(
    public rncoService: RncoService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  // get all products
  getProducts(){
    this.rncoService.GetAllListedProducts().subscribe(
      data => {
        let count = 0
        let products: any
        products = data
        products.forEach(element => {
          if(element.campaignCount >= 0){
            this.ActiveCampaigns.push(element)
          }
          if(element.campaignCount >= 1){
            this.LeadingCampaigns.push(element)
            // loop through leading campaigns
            this.LeadingCampaigns.forEach(element => {            
              var iAmount = element.campaignCount * element['productPayoutConfig'].amountPerConversion * element.quantity
              count = iAmount + count
            });
          }
          element['productImages'].forEach((item, index) => {
            if(index === 0){
              element.mainImg = item.imageUrl
            }
          })
          // this.getFirstProductImage(element)
        });
        console.log(products)
        this.productsItems = products
        this.EstimatedFunds = count
      }
      
    )
  }
}
