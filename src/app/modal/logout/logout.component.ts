import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginmodalService } from 'app/loginmodal.service';
import { NotificationService } from 'app/services/notification';
import { RncoService } from 'app/services/rncoService';
import { EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  display$ = false;
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService,
    public router: Router,
    public location: Location,
    private modalService: LoginmodalService) { }

  ngOnInit(): void {
  }
  @Output() hideLogOutModal = new EventEmitter<any>();
  close() {
    //this.modalService.close();
  }

  goBack() {
    this.display$.valueOf()
    this.hideLogOutModal.emit(false)
  }

  Signout() {
    this.rncoService.Logout().subscribe((res) => {
      this.router.navigate(['/login'])
    })
  }

}
