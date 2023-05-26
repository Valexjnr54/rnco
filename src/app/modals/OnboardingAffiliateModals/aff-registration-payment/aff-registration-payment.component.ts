import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-aff-registration-payment',
  templateUrl: './aff-registration-payment.component.html',
  styleUrls: ['./aff-registration-payment.component.scss']
})
export class AffRegistrationPaymentComponent implements OnInit {
  @Output() toNextStageSixth = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  cansubmit = false;
  nextStep(){
    this.toNextStageSixth.emit('seventh_step')
  }
}
