import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    public rncoService: RncoService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  user: any
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  getUser(){
    const user = localStorage.getItem('userId')
    this.rncoService.GetVerifiedMerchant(user).subscribe((res)=>{
      this.user = res
    })
  }
}
