import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-aff-settings',
  templateUrl: './aff-settings.component.html',
  styleUrls: ['./aff-settings.component.scss']
})
export class AffSettingsComponent implements OnInit {

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
    this.rncoService.GetAffiliateById(user).subscribe((res)=>{
      this.user = res
    })
  }
}
