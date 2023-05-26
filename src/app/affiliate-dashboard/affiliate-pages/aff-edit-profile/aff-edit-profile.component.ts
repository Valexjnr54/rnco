import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService} from 'app/services/notification';

@Component({
  selector: 'app-aff-edit-profile',
  templateUrl: './aff-edit-profile.component.html',
  styleUrls: ['./aff-edit-profile.component.scss']
})
export class AffEditProfileComponent implements OnInit {

  constructor(
    public rncoService: RncoService,
    public notification: NotificationService
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
      console.log(res)
      this.user = res
      this.userBank = res['bankAccount']
      this.userAddress = res['address']
    })
  }
  // default value
  currentModel: string = "Personal"
  togglerFunction(x: string){
    this.currentModel = x
  }
}
