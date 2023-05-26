import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';

@Component({
  selector: 'app-product-campaign',
  templateUrl: './product-campaign.component.html',
  styleUrls: ['./product-campaign.component.scss']
})
export class ProductCampaignComponent implements OnInit {
  productID: string
  productDetails: any
  productImages:any = []
  productMerchant: any
  affiliateId: any
  affiliateName: any
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
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getProductID(){
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      this.productID = params.productId;
      this.affiliateId = params.affiliateId
      this.affiliateName = params.affiliateName
      this.getProductDetails(this.productID)
    })
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
  copyUrl(){
    var copyText = this.qrShortLink;

      // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  }
  addToCampaign(){
    const affId = this.affiliateId
    console.log(affId)
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
