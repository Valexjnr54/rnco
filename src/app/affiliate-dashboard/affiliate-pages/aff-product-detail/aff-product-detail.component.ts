import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
@Component({
  selector: 'app-aff-product-detail',
  templateUrl: './aff-product-detail.component.html',
  styleUrls: ['./aff-product-detail.component.scss']
})
export class AffProductDetailComponent implements OnInit {
  productID: string
  productDetails: any
  productImages:any = []
  productMerchant: any
  imageUrls: any = []
  indexImage:any
  joinCampaign: boolean
  qrShortLink: any
  constructor(
    private route: ActivatedRoute,
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.getProductID()
  }
  getProductID(){
    this.route.queryParams.subscribe(params=>{
      this.productID = params.id;
      this.getProductDetails(this.productID)
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getProductDetails(id){
    this.rncoService.GetSingleProduct(id).subscribe((res)=>{
      this.productDetails = res
      this.productImages = res['productImages']
      this.productMerchant = res['merchant']
      for (let index = 0; index < this.productImages.length; index++) {
        const images = this.productImages[index];
        this.imageUrls.push(images['imageUrl'])
        this.indexImage = this.imageUrls[0]
      }
      
    })
  }
  addToCampaign(){
    const affId = localStorage.getItem('userId')
    const aId = parseInt(affId)
    const data = {
      affId: aId,
      merchId: this.productMerchant['id'],
      prodId: this.productDetails['id']
    }
    this.rncoService.AddProductCampaign(data).subscribe((res)=>{
      if(res){
        this.joinCampaign = true
        this.qrShortLink = res['shortUrl']
      }
    })
  }
}
