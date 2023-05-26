import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-merchant',
  templateUrl: './ad-merchant.component.html',
  styleUrls: ['./ad-merchant.component.scss']
})
export class AdMerchantComponent implements OnInit, AfterViewInit {

  constructor(
    public rncoService: RncoService,
    public acticatedRoute: ActivatedRoute
  ) { }
  // products Array
  products:any
  productCount: number
  ngOnInit(): void{
    this.rncoService.getToken()
    this.getMerchant()
    this.getProducts()
  }

 ngAfterViewInit():void{
 console.log('in here  ngAfterViewInit')
 this.getProducts();
  }


  merchant: any
  merchantAddress: any
  merchantConfig: any
  stringId: any
  collapased: boolean
  toFalse(e:Event){
    e.stopPropagation()
    this.collapased = false
  }
  toTrue(e:Event){
    e.stopPropagation()
    this.collapased = true
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getMerchant(){
    this.acticatedRoute.queryParams.subscribe(params => {
        let id = params['id']
        this.stringId = id
      }  
    )
    this.rncoService.GetVerifiedMerchant(this.stringId).subscribe((res)=>{
      console.log(res)
      this.merchant = res;
      this.merchantAddress = res['address'];
      this.merchantConfig = res['merchantConfig'];
    })
  }
  getProducts(){
    const userId = localStorage.getItem('userId');
    this.rncoService.GetAllProduct(this.stringId).subscribe((res)=>{
      this.products = res;
      console.log(this.products)
      // count items in products
      let count = 0;
      for (let properties in this.products) {
        count = count + 1
        console.log(count)
        this.productCount = count
      }
    })
  }

}
