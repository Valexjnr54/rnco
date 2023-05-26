import { LogoutService } from './../../../services/logout.service';
import { SideBarService } from './../../../sidebar.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aff-dashboard-sidebar',
  templateUrl: './aff-dashboard-sidebar.component.html',
  styleUrls: ['./aff-dashboard-sidebar.component.scss']
})
export class AffDashboardSidebarComponent implements OnInit {
   isClosed$!: BehaviorSubject<boolean>;
  constructor(
    private sideBarService: SideBarService,
    public router: Router,
    ) { }
  @Output() showLogOutModal = new EventEmitter<any>()
  ngOnInit(): void {
    this.isClosed$ = this.sideBarService.SidebarToggle;
  }
  showLogOut(){
    this.showLogOutModal.emit(true)
  }
  Logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
