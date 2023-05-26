import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registraton-complete',
  templateUrl: './registraton-complete.component.html',
  styleUrls: ['./registraton-complete.component.scss']
})
export class RegistratonCompleteComponent implements OnInit {
  @Output () completeRegistration = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  returnToDashboard(){
    this.completeRegistration.emit()
  }
}
