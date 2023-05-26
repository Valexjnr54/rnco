import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aff-reset-password',
  templateUrl: './aff-reset-password.component.html',
  styleUrls: ['./aff-reset-password.component.scss']
})
export class AffResetPasswordComponent implements OnInit {
  email: string
  constructor() { }

  ngOnInit(): void {
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
}
