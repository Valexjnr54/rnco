import{Component, OnInit, Output, EventEmitter}from '@angular/core';
import {NotificationService}from 'app/services/notification';
import {RncoService}from 'app/services/rncoService';
import {FormGroup, FormControl, Validators }from '@angular/forms';

@Component({
selector: 'app-business',
templateUrl: './business.component.html',
styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  ngOnInit(): void {
    
  }
  @Output() toNextStageSecond = new EventEmitter<string>();
  @Output() isOnboardingReg = new EventEmitter<boolean>();
  // reactive form
  businessName: string;
  website: string;
  channel: string = "WHATSAPP";
  payment: string = "EXTERNAL";
  payoutProvider: string = "PAYSTACK";
  street: string;
  city: string;
  bizType: string;
  lga: string;
  state: string = 'Edo State';
  country: string = 'Nigeria'
  registeredBiz: boolean;
 // getOnboardReg(){
  //  this.isOnboardingReg.emit(this.registeredBiz)
 // }

  // validate and send form data
  validateForm(currentValue:string){

         if(!this.street && !this.city && !this.lga && !this.state && !this.businessName && !this.bizType){
                this.notification.alertInfo("Fields cannot be empty")
         }else if(!this.businessName || !this.businessName.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Business Name is required")
        }else if(!this.street || !this.street.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Street Address is required")
        }else if(!this.lga || !this.lga.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("LGA is required")
        }else if(!this.city || !this.city.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("City is required")
        }else if(!this.bizType || !this.bizType.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Business Type is required")
        }else{
        console.log('bizType' + this.bizType);

     if(this.bizType === 'registered'){
         this.registeredBiz = true
     }else{
         this.registeredBiz = false
     }
        this.isOnboardingReg.emit(this.registeredBiz)
         console.log('regBiz-0 ' + this.registeredBiz);
       localStorage.setItem('onBoardingStatus',this.bizType)
        // call id from 
        // localStorage.getItem()
        const Id = localStorage.getItem('userId')
        const data= {
          businessName: this.businessName,
          code:'667777',
          website: this.website,
          registeredBiz: this.registeredBiz,
          merchantConfig: {
            channel: this.channel,
            payment: this.payment,
            payoutProvider: this.payoutProvider,
          },
          address: {
            street: this.street,
            city: this.city,
            lga: this.lga,
            state: this.state,
            country: this.country
          },
          
        }
        this.rncoService.UpdateMerchantBusinessDetails(data, Id).subscribe(
          (res)=>{
            localStorage.setItem('userStatus','ADDED_BUSINESS_DETAILS')
            this.notification.alertSucess('Business Details Added');
            
            this.toNextStageSecond.emit(currentValue)

          }
)
// // reroute to the next third step
     }
  }
}
