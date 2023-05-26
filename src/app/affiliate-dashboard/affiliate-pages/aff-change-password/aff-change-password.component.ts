import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aff-change-password',
  templateUrl: './aff-change-password.component.html',
  styleUrls: ['./aff-change-password.component.scss']
})
export class AffChangePasswordComponent implements OnInit {
  hidePassword = true;
  hideConPassword = true;
  hideInitPassword = true
  isConfirmed: any
  password: string;
  confirmPassword: string;
  constructor() { }

  ngOnInit(): void {
  }
  requestPasswordChange(){

  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  passChecker(){
    if (this.confirmPassword !== ""){
      if(this.confirmPassword == this.password){
        this.isConfirmed = true;
      }else{
        this.isConfirmed = false
      }
    }
  }
}
