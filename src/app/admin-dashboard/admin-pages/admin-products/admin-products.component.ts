import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  productLength: any
  listedProduct: any = []
  isNotListed: any = []
  constructor(
    public rncoservice : RncoService
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

 ngAfterViewInit():void{
 console.log('in here  ngAfterViewInit')
    this.getAllProducts()
  }

  products: any
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  // call all products
  getAllProducts(){
    this.rncoservice.GetAllProducts().subscribe(res =>{
      this.products = res
      this.productLength = this.products.length
      console.log(this.products)
      this.products.forEach(element => {
        if(element.listed == true){
          this.listedProduct.push(element)
        } else{
          this.isNotListed.push(element)
        }
      });
    })
  }
}
