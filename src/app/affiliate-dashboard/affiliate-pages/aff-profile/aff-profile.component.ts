import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-aff-profile',
  templateUrl: './aff-profile.component.html',
  styleUrls: ['./aff-profile.component.scss']
})
export class AffProfileComponent implements OnInit {

  constructor(
   public rncoService: RncoService,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  user: any
  userBank: object
  userAddress: object
  getUser(){
    const user = localStorage.getItem('userId')
    this.rncoService.GetAffiliateById(user).subscribe((res)=>{
      this.user = res
      this.userBank = res['bankAccount']
      this.userAddress = res['address']
    })
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
}
