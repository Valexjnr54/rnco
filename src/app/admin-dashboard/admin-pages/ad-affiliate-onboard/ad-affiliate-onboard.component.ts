import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-affiliate-onboard',
  templateUrl: './ad-affiliate-onboard.component.html',
  styleUrls: ['./ad-affiliate-onboard.component.scss']
})
export class AdAffiliateOnboardComponent implements OnInit {
  @Input() item = ''
  UserObject = {
    firstName: '',
    lastName: '',
    userId: '',
    login: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  // merchant onboarding steps
  currentStage: any;
  Step =  {
    first_step: true,
    second_step: false,
    third_step: false,
    fourth_step: false,
    fifth_step: false,
    sixth_step: false,
  }
  assignDetails(passedDetails:any){
    this.UserObject.firstName = passedDetails['firstName'];
    this.UserObject.lastName = passedDetails['lastName'];
    this.UserObject.login =  passedDetails['login'];
    this.UserObject.userId = passedDetails['userId'];
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
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
        // change current value to true
        this.Step[key] = true;
      }
    }
  }
  finalStep(){
    this.Step.first_step = true;
    this.Step.second_step = false;
    this.Step.third_step = false
    this.Step.fourth_step = false;
    this.Step.fifth_step = false;
    this.Step.sixth_step = false;
  }
}
