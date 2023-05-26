import{Component, Input, OnInit}from '@angular/core';
import {NotificationService}from 'app/services/notification';
import {RncoService }from 'app/services/rncoService';

@Component({
selector: 'app-edit-merchant-business',
templateUrl: './edit-merchant-business.component.html',
styleUrls: ['./edit-merchant-business.component.scss']
})
export class EditMerchantBusinessComponent implements OnInit {
//@Input() userBusiness:object
@Input() User:object

constructor(
    public rncoService: RncoService,
    public notification: NotificationService,
  ) { }

  ngOnInit(): void {
    console.log(this.User);
    this.alignBusiness()
  }
  businessName: string
  street: string
  country: string
  state: string
  lga: string
  city: string
  website: string
  registeredBiz : boolean

  alignBusiness() {
    this.businessName = this.User['businessName'];
    this.street = this.User['address']['street'];
    this.state = this.User['address']['state'];
    this.lga = this.User['address']['lga'];
    this.city = this.User['address']['city'];
    this.website = this.User['website'];
    this.country = this.User['address']['country'];
    this.registeredBiz =  this.User['registeredBiz'];
  }


     submitForm(){
         if( !this.businessName! && this.street && !this.city && !this.lga && !this.state){
                this.notification.alertInfo("Fields cannot be empty")
         }else if(!this.businessName || !this.businessName.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Business Name is required")
        }else if(!this.street || !this.street.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Street Address is required")
        }else if(!this.lga || !this.lga.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("LGA is required")
        }else if(!this.city || !this.city.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("City is required")
        }else{
        const Id = localStorage.getItem('userId')
        const data= {
          businessName: this.businessName,
          code:'667777',
          website: this.website,
          registeredBiz: this.registeredBiz,
          merchantConfig: {
            id: this.User['merchantConfig']['id'],
            channel: 'WHATSAPP',
            payment: 'EXTERNAL',
            payoutProvider: 'PAYSTACK',
          },
          address: {
            id: this.User['address']['id'],
            street: this.street,
            city: this.city,
            lga: this.lga,
            state: this.state,
            country: this.country
          },
        }

    console.log('business data' + data['businessName'])
      this.rncoService.EditMerchantBusinessDetails(data, Id).subscribe((res) => {
      this.notification.alertSucess('Business Details updated');

        //update user object on the front end as well
        this.updateUserObject()
     }
  );
   }
}

 updateUserObject(){
   this.User['businessName'] = this.businessName;
   this.User['address']['street'] = this.street ;
   this.User['address']['lga'] = this.lga ;
   this.User['address']['city'] = this.city;
   this.User['website'] =  this.website;
  }

}
