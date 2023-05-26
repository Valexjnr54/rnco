import { SideBarService } from './../../../sidebar.service';
import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-aff-dashboard-navbar',
  templateUrl: './aff-dashboard-navbar.component.html',
  styleUrls: ['./aff-dashboard-navbar.component.scss']
})
export class AffDashboardNavbarComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter()
  constructor(private sideBarService: SideBarService) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('current_user');
  }
  currentUser


   toggleSideBar() {
    const lastValue = this.sideBarService.SidebarToggle.getValue();
    this.sideBarService.SidebarToggle.next(!lastValue);
  }

}
