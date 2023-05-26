import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-merchant-dashboard',
  templateUrl: './merchant-dashboard.component.html',
  styleUrls: ['./merchant-dashboard.component.scss']
})
export class MerchantDashboardComponent implements OnInit {
  @Input() item = ''
  constructor() { }
  Step = {
    first_step : false,
    second_step: false,
    third_step : false,
    fourth_step :  false,
    fifth_step : false,
    sixth_step : false,
    seventh_step : false,
  }
  // check user status
  checkStatus(){
    const status = localStorage.getItem('userStatus')
    if(status !== "SUBSCRIBED"){
      this.userNew = true;
      switch (status) {
        case  'INIT':
          this.Step.first_step = true
          
          break;
        case 'ADDED_BUSINESS_DETAILS': 
          this.Step.fourth_step = true
          break;
        case 'DOCS_UPLOADED':
          this.Step.fifth_step = true
        break
        case'ADDED_BANK_DETAILS':
          this.Step.sixth_step = true
        break
        default:
          break;
      }
    }
  }
  isOnboarderReg: boolean;
  ngOnInit(): void {
    this.checkStatus()
  }
  // for testing assume user is new
  userNew:boolean;
  // step manager default values
  storeReg(regLevel:any){
    this.isOnboarderReg = regLevel
  }
  valueFromChild(currentValue: string){
    // console.log(currentValue)
    for ( const [key,value] of Object.entries(this.Step)){ 
      if(key == currentValue){
      // change all values of step to false
      this.Step.first_step = false;
      this.Step.second_step = false;
      this.Step.third_step = false
      this.Step.fourth_step = false;
      this.Step.fifth_step = false;
      this.Step.sixth_step = false;
      this.Step.seventh_step = false;
        // change current value to true
        this.Step[key] = true;
      }
    }
  }
  finalStep(){
    this.Step.first_step = false;
    this.Step.second_step = false;
    this.Step.third_step = false
    this.Step.fourth_step = false;
    this.Step.fifth_step = false;
    this.Step.sixth_step = false;
    this.Step.seventh_step = false;
    this.userNew = false
  }
}
