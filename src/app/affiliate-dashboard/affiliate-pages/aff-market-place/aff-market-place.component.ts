import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-aff-market-place',
  templateUrl: './aff-market-place.component.html',
  styleUrls: ['./aff-market-place.component.scss']
})
export class AffMarketPlaceComponent implements OnInit {

  constructor(
    public rncoService: RncoService,
  ) { }
    productArray: any
  ngOnInit(): void {
    this.getAllProductsInMarketPlace()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getAllProductsInMarketPlace(){
    this.rncoService.GetMarketPlaceProduct().subscribe((res)=>{
      console.log(res);
      this.productArray = res
    })
  }
}
