import{Component, OnInit, Output, EventEmitter, Input}from '@angular/core';
import {FormControl, FormGroup, Validators}from '@angular/forms';
import {NotificationService}from 'app/services/notification';
import { RncoService}from 'app/services/rncoService';

@Component({
selector: 'app-ad-aff-business',
templateUrl: './ad-aff-business.component.html',
styleUrls: ['./ad-aff-business.component.scss']
})
export class AdAffBusinessComponent implements OnInit {
@Input() userId = ''
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }

  affBusinessForm: FormGroup
  ngOnInit(): void {
    console.log(this.userId)

  }
  @Output() toNextStageSecond = new EventEmitter<string>();
   

//  @Input() userId = ''
  businessName: string;
  website: string;
  street: string;
  city: string;
  lga: string;
  state: string = 'Edo State';
  country: string = 'Nigeria'
 registeredBiz: boolean;


  validateForm(currentValue:string){
     if(!this.street && !this.city && !this.lga && !this.state){
       this.notification.alertInfo("Fields cannot be empty")
     }else if(!this.street || !this.street.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Street Address is required")
     }else if(!this.lga || !this.lga.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("LGA is required")
     }else if(!this.city || !this.city.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("City is required")
    }else{
      // call id from 
      // localStorage.getItem()
      console.log('usr id==> '+this.userId)
      const Id = this.userId

      const data = {
        code: '667777',
        website: this.website,
        address: {
          street: this.street,
          city: this.city,
          lga: this.lga,
          state: this.state,
          country: this.country
        },
          
      }
      this.rncoService.UpdateAffiliateBusiness(Id, data).subscribe(
        (res) => {
          this.notification.alertSucessBusiness();
        })
// // reroute to the next third step
this.toNextStageSecond.emit(currentValue)
    }
  }
}
