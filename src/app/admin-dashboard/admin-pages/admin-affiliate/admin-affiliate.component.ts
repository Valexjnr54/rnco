import { NotificationService } from './../../../services/notification';
import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-affiliate',
  templateUrl: './admin-affiliate.component.html',
  styleUrls: ['./admin-affiliate.component.scss']
})
export class AdminAffiliateComponent implements OnInit {

  constructor(
    public rncoservice: RncoService,
    public activatedRoute: ActivatedRoute,
    public notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getAffilates()
    this.getAffiliateCampaigns()
  }
  affiliate: any
  affiliateAddress: any
  affiliateConfig: any
  stringId: any
  campaigns: any
  seeIf: any
  getAffiliateCampaigns(){
    this.rncoservice.GetAllAffliateCampaigns(this.stringId).subscribe(res =>{
      console.log(res)
      this.campaigns = res
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getLink(x){
    navigator.clipboard.writeText(x)
    this.notification.alertSucess('Link was copied');
    this.seeIf = ''
  }
  getAffilates(){
    this.activatedRoute.queryParams.subscribe(params =>{
      let id = params['id']
      console.log(id)
      this.stringId = id
    })
    this.rncoservice.GetAffiliateById(this.stringId).subscribe((res)=>{
      console.log(res)
      this.affiliate = res;
      this.affiliateAddress = res['address']
    })
  }
}
