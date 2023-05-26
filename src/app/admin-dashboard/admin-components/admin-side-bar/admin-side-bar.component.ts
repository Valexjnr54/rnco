import { Component, OnInit,HostBinding,Input,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.scss']
})
export class AdminSideBarComponent implements OnInit {
   sideBarOpen = false;
   @Input() toggleSidebarForMe: EventEmitter<any> = new EventEmitter()
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  @Output() showLogOutModal = new EventEmitter<any>()
  sidebarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  showLogOut(){
    this.showLogOutModal.emit(true)
  }
  Logout(){
    this.router.navigate(['/logout']);
  }

}
