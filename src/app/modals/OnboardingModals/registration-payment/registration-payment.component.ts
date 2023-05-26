import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-registration-payment',
  templateUrl: './registration-payment.component.html',
  styleUrls: ['./registration-payment.component.scss']
})
export class RegistrationPaymentComponent implements OnInit {
  @Output() toNextStageSixth = new EventEmitter<string>();
  constructor(
    public rncoservice: RncoService
  ) { }
  
  ngOnInit(): void {
    this.generateReference();
  }
  cansubmit = false;
  IsComplete = false;
  isPaymentDone = true;
  // things to be passed to the paystack call
  paystacktoken = this.rncoservice.token;
  email = localStorage.getItem('userEmail');
  ref: string;
  amount: number;
  paymentInit() {
    console.log('Payment initialized');
  }


  paymentCancel() {
    console.log('payment failed');
  }

  // @Input
  generateReference(){
    // get reference
    const id = localStorage.getItem('userId')
    this.rncoservice.GetPaystackReference(id).subscribe((res)=>{
      console.log(res)
      this.ref = res['reference'];
      this.amount = res['totalAmount']

    })
    this.rncoservice.getToken()
    // 
  }
  // function to call when the paystack is completed
  paystackPaymentDone(){
    this.toNextStageSixth.emit('seventh_step')
  }
// ==========================================
// After Paystack payment is complete
// ==========================================
  paymentDone(ref: any) {
    //
   // this.toNextStageSixth.emit('seventh_step')
    this.isPaymentDone = false;
    console.log(ref['reference'])
    const passref = ref['reference']

    this.rncoservice.VerifyPaystackTransaction(passref).subscribe((res)=>{
      console.log(res)
      this.IsComplete = true;
      this.cansubmit = false;
      this.paystackPaymentDone();
      // change user status
      //todo: check if api is successful before navigation to next step; if it failed, user should be able to generate another reference and make payment

    // From Emmanuel: call final step (Seventh Step)
    // ====================================
      // calls external function to go to final PAGE
      
    })
  }

  

}
