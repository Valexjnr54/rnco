import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listedProduct = []
  constructor(
    public rncoService: RncoService,
  ) { }
  // products Array
  products:any
  productCount: number
  ngOnInit(): void{
    this.getProducts()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getProducts(){
    const userId = localStorage.getItem('userId');
    this.rncoService.GetAllProduct(userId).subscribe((res)=>{
      this.products = res;
      this.products.forEach(element => {
        if(element.listed == true){
          this.listedProduct.push(element)
        }
      });
      // count items in products
      let count = 0;
      for (let properties in this.products) {
        count = count + 1
        this.productCount = count
      }
    })
  }
  
}
