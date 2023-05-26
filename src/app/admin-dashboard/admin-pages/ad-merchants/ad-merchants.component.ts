import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification';

@Component({
  selector: 'app-ad-merchants',
  templateUrl: './ad-merchants.component.html',
  styleUrls: ['./ad-merchants.component.scss']
})
export class AdMerchantsComponent implements OnInit {

  constructor(
   public rncoservice: RncoService,
   public router: Router,
   public notification: NotificationService
  ) { }
  allMerchants: any
  activeMerchants: any = []
  inactiveMerchants: any = []
  ngOnInit(): void {
    // get add merchants
    this.getAllMerchants()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getMerchant(x:any, y){
    if(y == false){
      this.notification.alertInfo("Inactive users cannot be edited")
    } else {
      // route to merchant page pass Id as a query param
    this.router.navigate(['/admin/merchant'],{queryParams:{id:x,}})
    }
  }
  getAllMerchants(){
    this.rncoservice.GetAllMerchants().subscribe((res)=>{
      this.allMerchants = res
      // loop through all merchants
      this.allMerchants.forEach(element => {
        if(element.activated == true){
          this.activeMerchants.push(element)
        } else{
          this.inactiveMerchants.push(element)
        }
      });
    })
  }
}
