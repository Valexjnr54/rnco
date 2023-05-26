import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-ad-registration-payment',
  templateUrl: './ad-registration-payment.component.html',
  styleUrls: ['./ad-registration-payment.component.scss']
})
export class AdRegistrationPaymentComponent implements OnInit {
  @Output() toNextStageFifth = new EventEmitter<string>();
  constructor(
    public rncoservice: RncoService
  ) { }
  
  ngOnInit(): void {
  }
  cansubmit = false;
  // things to be passed to the paystack call
  userAgree(){
    this.toNextStageFifth.emit('sixth_step')
  }
}
