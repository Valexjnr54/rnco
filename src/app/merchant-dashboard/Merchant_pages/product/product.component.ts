import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productID: string
  productDetails: any
  category: String
  productImages:any = []
  imageUrls: any = []
  indexImage:any
  constructor(
    private route: ActivatedRoute,
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.getProductID()
  }
  // look at route for query parameters
  getProductID(){
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      this.productID = params.id;
      this.getProductDetails(this.productID)
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getProductDetails(id){
    this.rncoService.GetAnyProduct(id).subscribe((res)=>{
      this.productDetails = res
       if(this.productDetails['category'] == 'HEALTH_WELLNESS'){
          this.category = 'HEALTH & WELLNESS'
        }else if(this.productDetails['category'] == 'REAL_ESTATE'){
          this.category = 'REAL ESTATE'
        }else if(this.productDetails['category'] == 'PERSONAL_DEVELOPMENT'){
          this.category = 'PERSONAL DEVELOPMENT'
        }else{
        this.category = this.productDetails['category']
        }



      console.log(this.productDetails)
      // get product images
        // loop through response
        this.productImages = res['productImages']
       for (let index = 0; index < this.productImages.length; index++) {
        const images = this.productImages[index];
        this.imageUrls.push(images['imageUrl'])
        this.indexImage = this.imageUrls[0]
        console.log(this.imageUrls)
       }
    })
  }
  addToMarket(){
    this.rncoService.getToken()
    this.rncoService.AddToMarketPlace(this.productID).subscribe((res)=>{
      console.log(res)
      this.notification.alertSucess('Product added to marketplace')
      window.location.reload()

    })
  }
  removeFromMarket(){
    this.rncoService.RemoveFromMarket(this.productID).subscribe((res)=>{
      this.notification.alertSucess('Product removed from marketplace')
      window.location.reload()
    })
  }
}
