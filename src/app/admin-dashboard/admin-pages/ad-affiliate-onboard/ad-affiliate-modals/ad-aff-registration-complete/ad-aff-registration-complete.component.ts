import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ad-aff-registration-complete',
  templateUrl: './ad-aff-registration-complete.component.html',
  styleUrls: ['./ad-aff-registration-complete.component.scss']
})
export class AdAffRegistrationCompleteComponent implements OnInit {
  @Output () completeRegistration = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  returnToDashboard(){
    this.completeRegistration.emit()
  }
}
