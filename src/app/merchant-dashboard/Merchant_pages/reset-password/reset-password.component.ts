import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email: string
  constructor() { }

  ngOnInit(): void {
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
}
