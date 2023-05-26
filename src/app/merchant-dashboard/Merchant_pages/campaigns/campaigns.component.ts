import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
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
    const userId = localStorage.getItem('userId');
    this.rncoService.GetAllCampaignProducts(userId).subscribe(
      data => {
        let count = 0
        let products: any
        products = data
        products.forEach(element => {
          if(element.campaignCount >= 0){
            this.ActiveCampaigns.push(element)
            count = (element.campaignCount * element['amountPerConversion'] * element.quantity) + count
          }
          if(element.campaignCount >= 1){
            this.LeadingCampaigns.push(element)
          }
         // element.mainImg = item.imageUrl
        //  element['productImages'].forEach((item, index) => {
          //  if(index === 0){
         //     element.mainImg = item.imageUrl
        //    }
         // })
          // this.getFirstProductImage(element)
        });
        this.productsItems = products
        this.EstimatedFunds = count
      }
      
    )
  }
}
