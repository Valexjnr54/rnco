import { LogoutService } from './../services/logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliate-dashboard',
  templateUrl: './affiliate-dashboard.component.html',
  styleUrls: ['./affiliate-dashboard.component.scss']
})
export class AffiliateDashboardComponent implements OnInit {

  constructor(private logoutService:LogoutService) { }
  isLogout: false; 
  ngOnInit(): void {
    this.checkStatus()
  }
  Step = {
    first_step : false,
    second_step: false,
    third_step : false,
    fourth_step :  false,
    fifth_step : false,
    sixth_step : false,
    seventh_step : false,
  }
  checkLogout() {
    
  }
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
  // for testing assume user is new
  userNew:boolean
  // step manager default values
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
