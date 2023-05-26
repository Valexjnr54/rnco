import{Component, OnInit, Output, EventEmitter,Input}from '@angular/core';
import {FormGroup, FormControl,Validators}from '@angular/forms';
import {NotificationService}from 'app/services/notification';
import { RncoService}from 'app/services/rncoService'

@Component({
selector: 'app-ad-business',
templateUrl: './ad-business.component.html',
styleUrls: ['./ad-business.component.scss']
})
export class AdBusinessComponent implements OnInit {
@Input() userId = ''
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  businessForm:FormGroup
  ngOnInit(): void {
    console.log(this.userId)
    this.businessForm = new FormGroup({
      businessName: new FormControl(null,Validators.required),
      street: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      lga: new FormControl(null,Validators.required),
    });
  }
  @Output() toNextStageSecond = new EventEmitter<string>();
  @Output() isOnboardingReg = new EventEmitter<boolean>()
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
//  getOnboardReg(){
//    this.isOnboardingReg.emit(this.registeredBiz)
//    console.log(this.registeredBiz)
//  }
  // validate and send form data
  validateForm(currentValue:string){
        // call id from 
        // localStorage.getItem() 
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

         console.log(this.userId)
         console.log('bizType' + this.bizType);

     if(this.bizType === 'registered'){
         this.registeredBiz = true
     }else{
         this.registeredBiz = false
     }
         console.log('regBiz-1' + this.registeredBiz);

       this.isOnboardingReg.emit(this.registeredBiz)
      console.log('regBiz- 2' + this.registeredBiz);


       const Id = this.userId
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
            console.log('success');
            console.log(res);
            this.notification.alertSucessBusiness();
          }
)
// // reroute to the next third step
console.log(currentValue);
     console.log(this.registeredBiz)

  this.toNextStageSecond.emit(currentValue)
         }
     
  }
}
