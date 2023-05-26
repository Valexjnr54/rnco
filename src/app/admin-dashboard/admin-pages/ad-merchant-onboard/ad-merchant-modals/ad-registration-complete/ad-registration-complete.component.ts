import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ad-registration-complete',
  templateUrl: './ad-registration-complete.component.html',
  styleUrls: ['./ad-registration-complete.component.scss']
})
export class AdRegistrationCompleteComponent implements OnInit {
  @Output () completeRegistration = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  returnToDashboard(){
    this.completeRegistration.emit()
  }
}
