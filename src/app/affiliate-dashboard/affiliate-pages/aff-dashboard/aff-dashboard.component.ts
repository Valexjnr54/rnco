import { NotificationService } from './../../../services/notification';
import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
@Component({
  selector: 'app-aff-dashboard',
  templateUrl: './aff-dashboard.component.html',
  styleUrls: ['./aff-dashboard.component.scss']
})
export class AffDashboardComponent implements OnInit {
  affiliate: any;
  affiliateCampaigns: any
  estimatedEarnings: any;
  constructor(
    public notification: NotificationService,
    public rncoService: RncoService
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
    this.notification.alertSucess("Link copied")
  }
}
