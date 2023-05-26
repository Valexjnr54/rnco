import { SideBarService } from './../../../sidebar.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter()
  constructor(private sideBarService: SideBarService) { }
  loggedinUser:string
  ngOnInit(): void {
    this.loggedinUser = localStorage.getItem('current_user')
  }
 
  toggleSideBar() {
    const lastValue = this.sideBarService.SidebarToggle.getValue();
    this.sideBarService.SidebarToggle.next(!lastValue);
  }

}
