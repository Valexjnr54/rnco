import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
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
