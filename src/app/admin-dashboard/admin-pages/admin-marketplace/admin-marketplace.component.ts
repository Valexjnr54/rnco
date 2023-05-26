import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-marketplace',
  templateUrl: './admin-marketplace.component.html',
  styleUrls: ['./admin-marketplace.component.scss']
})
export class AdminMarketplaceComponent implements OnInit {

  constructor(
    public rncoservice: RncoService,
    public ActivatedRoute: ActivatedRoute,
  ) { }
  products: any
  fromAffiliate: boolean
  affiliateName: any
  affiliateId: any
  ngOnInit(): void {
    this.getVerifiedProducts()
    this.fromAffiliate = false
    this.checkRoute()
  }
  // check if it is coming from affilate through route
  checkRoute(){
    this.ActivatedRoute.queryParams.subscribe(params => {
      if(Object.keys(params).length !== 0){
        this.fromAffiliate = true
        this.affiliateName = params.affiliateName
        this.affiliateId  = params.affiliateId
      }
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getVerifiedProducts(){
   this.rncoservice.GetAllListedProducts().subscribe(res=>{
    this.products = res
   }) 
  }
}
