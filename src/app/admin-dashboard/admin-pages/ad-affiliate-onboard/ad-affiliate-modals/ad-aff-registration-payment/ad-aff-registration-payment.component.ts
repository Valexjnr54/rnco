import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ad-aff-registration-payment',
  templateUrl: './ad-aff-registration-payment.component.html',
  styleUrls: ['./ad-aff-registration-payment.component.scss']
})
export class AdAffRegistrationPaymentComponent implements OnInit {
  @Output() toNextStageFifth = new EventEmitter<string>();
  private loading: boolean = false;
  constructor() { }
  setLoading(loading: boolean) {
    this.loading = loading;
  }
  ngOnInit(): void {
  }
  cansubmit = false;
  nextStep(){
    this.toNextStageFifth.emit('sixth_step')
    this.setLoading(true);
  }

  getLoading(): boolean{
    return this.loading
  }
}
