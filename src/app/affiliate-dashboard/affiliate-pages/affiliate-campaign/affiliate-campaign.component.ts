import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from './../../../services/notification';

@Component({
  selector: 'app-affiliate-campaign',
  templateUrl: './affiliate-campaign.component.html',
  styleUrls: ['./affiliate-campaign.component.scss']
})
export class AffiliateCampaignComponent implements OnInit {
  affiliate: any;
  affiliateCampaigns: any;
  estimatedEarnings: any;
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService

  ) { }

  ngOnInit(): void {
    this.getAffiliateCampaigns()
    this.getAffiliate()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getAffiliate(){
    const user = localStorage.getItem('userId')
    this.rncoService.GetAffiliateById(user).subscribe((res)=>{
      this.affiliate = res
    })
  }
  getAffiliateCampaigns(){
    const user = localStorage.getItem('userId')
    this.rncoService.GetAllAffliateCampaigns(user).subscribe((res)=>{
      console.log(res)
      this.affiliateCampaigns = res
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
    })
  }
  getLink(x){
    navigator.clipboard.writeText(x)
     this.notification.alertSucess('Link was copied');

  }
}
