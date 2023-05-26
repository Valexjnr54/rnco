import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'app/services/notification';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-edit-affiliate-business',
  templateUrl: './edit-affiliate-business.component.html',
  styleUrls: ['./edit-affiliate-business.component.scss']
})
export class EditAffiliateBusinessComponent implements OnInit {
@Input() User:object
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.updateData()
  }

  website: string;
  street: string;
  city: string;
  lga: string;
  state: string;
  country: string;

  updateData(){
    this.street = this.User['address']['street'];
    this.state = this.User['address']['state'];
    this.lga = this.User['address']['lga'];
    this.city = this.User['address']['city'];
    this.website = this.User['website'];
    this.country = this.User['address']['country'];
  }

 submitForm(){
         if(this.street && !this.city && !this.lga && !this.state){
                this.notification.alertInfo("Fields cannot be empty")
         }else if(!this.street || !this.street.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("Street Address is required")
        }else if(!this.lga || !this.lga.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("LGA is required")
        }else if(!this.city || !this.city.trim()){ //to check for null, empty and spaces
               this.notification.alertInfo("City is required")
        }else{
        const Id = localStorage.getItem('userId')
        console.log('user id' + Id)
        const data= {
          website: this.website,
          address: {
            id: this.User['address']['id'],
            street: this.street,
            city: this.city,
            lga: this.lga,
            state: this.state,
            country: this.country
          },
        }

       this.rncoService.EditAffiliateBusiness(data, Id).subscribe((res) => {
      this.notification.alertSucess('Business Details updated');

        //update user object on the front end as well
        this.updateUserObject()
     }
    );
}
}

 updateUserObject(){
   this.User['address']['street'] = this.street ;
   this.User['address']['lga'] = this.lga ;
   this.User['address']['city'] = this.city;
   this.User['website'] =  this.website;
  }

}