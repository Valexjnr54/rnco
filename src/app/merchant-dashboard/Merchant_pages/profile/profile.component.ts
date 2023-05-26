import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
   public rncoService: RncoService,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  user: any
  userBank: object
  userAddress: object
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getUser(){
    const user = localStorage.getItem('userId')
    this.rncoService.GetVerifiedMerchant(user).subscribe((res)=>{
      this.user = res
      this.userBank = res['bankAccount']
      this.userAddress = res['address']
    })
  }
}
