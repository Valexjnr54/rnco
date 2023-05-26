import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aff-registraton-complete',
  templateUrl: './aff-registraton-complete.component.html',
  styleUrls: ['./aff-registraton-complete.component.scss']
})
export class AffRegistratonCompleteComponent implements OnInit {
  @Output () completeRegistration = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  returnToDashboard(){
    this.completeRegistration.emit()
  }

}
