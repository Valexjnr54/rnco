import { Component, OnInit , Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss']
})
export class EditBusinessComponent implements OnInit {
  @Input() userBusiness: object
  @Input() user: object
  @Input() AccountType: any
  fromAffiliate: boolean
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  businessForm:FormGroup
  ngOnInit(): void {
    this.businessForm = new FormGroup({
      businessName: new FormControl(null,Validators.required),
      street: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      lga: new FormControl(null,Validators.required)
    })
   
  }
  ngAfterViewInit(): void {
    this.updateData()
    this.checkFrom()
  }
  checkFrom(){
    if(this.AccountType == 'affiliate'){
      this.fromAffiliate = true
    } else{
      this.fromAffiliate = false
    }
  }
  businessName: string;
  website: string;
  channel: string = "WHATSAPP";
  payment: string = "EXTERNAL";
  payoutProvider: string = "PAYSTACK";
  street: string;
  city: string;
  lga: string;
  state: string = 'Edo State';
  country: string = 'Nigeria'
  updateData(){
    this.businessName = this.user['businessName'];
    this.website = this.user['website'];
    this.street = this.userBusiness['street'];
    this.lga = this.userBusiness['lga'];
    this.city = this.userBusiness['city'];
  }
  submitForm(){
    if(this.AccountType == 'affiliate'){
      if( 
           !this.street
        && !this.city
        && !this.lga
        && !this.state
        && !this.country){
          this.notification.alertInfo('Fields cannot be empty');
        }else if(!this.city || !this.city.trim()){
          this.notification.alertInfo('city cannot be empty');
        }else if(!this.street || !this.street.trim()){
          this.notification.alertInfo('Street cannot be empty');
        }else if(!this.lga || !this.lga.trim()){
          this.notification.alertInfo('LGA cannot be empty');
        }
        else{

          const Id = localStorage.getItem('userId')
          const data= {
            businessName: this.businessName,
            website: this.website,
            registeredBiz: true,
            address: {
              street: this.street,
              city: this.city,
              lga: this.lga,
              state: this.state,
              country: this.country
            },
            
          }
          this.rncoService.UpdateAffiliateBusiness(data, Id).subscribe(
            (res)=>{
              this.notification.alertSucess('Business Details updated');
            }
          )
          }
    } else {
      if(!this.businessName 
        && !this.street
        && !this.city
        && !this.lga
        && !this.state
        && !this.country)
        {
          this.notification.alertInfo('Fields cannot be empty');
        }else if(!this.businessName || !this.businessName.trim()){
          this.notification.alertInfo('Business name cannot be empty');
        }else if(!this.street || !this.street.trim()){
          this.notification.alertInfo('Street cannot be empty');
        }
        else if(!this.city || !this.city.trim()){
          this.notification.alertInfo('City cannot be empty');
        } else if(!this.state || !this.state.trim()){
          this.notification.alertInfo('State cannot be empty');
        } else if(!this.lga || !this.lga.trim()){
          this.notification.alertInfo('LGA cannot be empty');
        }else{
          const Id = localStorage.getItem('userId')
          const data= {
            businessName: this.businessName,
            website: this.website,
            registeredBiz: true,
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
          this.rncoService.EditMerchantBusinessDetails(data, Id).subscribe(
            (res)=>{
              this.notification.alertSucess('Business Details updated');
            }
          )
      }
    }
  }
}
