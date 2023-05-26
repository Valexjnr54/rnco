import { BehaviorSubject } from 'rxjs';
import { SideBarService } from './../../../sidebar.service';
import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginmodalService } from 'app/loginmodal.service';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  isClosed$!: BehaviorSubject<boolean>;
  constructor(
    private sideBarService: SideBarService,
    public router: Router,
    private modalService: LoginmodalService
  ) {}
  @Input() sidebarSubject
  @Output() showLogOutModal = new EventEmitter<any>()
  ngOnInit(): void {
    this.isClosed$ = this.sideBarService.SidebarToggle;
    // console.log(this.isClosed$.value)
  }
  showLogOut(){
    this.showLogOutModal.emit(true)
  }
  open() {
  }

  
}
