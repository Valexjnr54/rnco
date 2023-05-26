import { NotificationService } from './../../../services/notification';
import { Component, OnInit} from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.scss']
})
export class AdDashboardComponent implements OnInit {
 

  campaigns: any
  unapprovedProducts: any
  estimatedEarnings: any;
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getCampaigns()
    this.getUnapprovedProducts()
  }
  // Get unapproved products
  getUnapprovedProducts() {
    this.rncoService.GetUnapprovedProducts().subscribe((data) => {
      console.log(data)
      this.unapprovedProducts = data;
    });
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  // Get campaigns
  getCampaigns(){
    this.rncoService.GetAllCampaigns().subscribe((res)=>{
      console.log(res)
      this.campaigns = res
       let count = 0;
      let products: any;
      products = res
      products.forEach(element => {
        if(element.campaignCount != 0 && element.amountPerConversion != null){
          console.log(element)
          count = (element.campaignCount * element.amountPerConversion * element.quantity) + count
        }
      });
      this.estimatedEarnings = count
      console.log(products)
    })
  }
  getLink(x){
    navigator.clipboard.writeText(x);
     this.notification.alertSucess('Link was copied');
  }
}
