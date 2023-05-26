import { Component, OnInit, Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.scss']
})
export class EditPersonalComponent implements OnInit {
  @Input() User:object
  @Input() AccountType: any
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  personalForm:FormGroup
  ngOnInit(): void {
    //  this.updateData()
    //  console.log(this.firstName)
    //console.log(this.updateData())
  }
  ngAfterViewInit(): void {
    this.updateData()
    
  }
  user: object
  firstName: string;
  lastName: string;
  middleName: string;
  userName: string;
  id: number;
  phoneNumber: string;

  
  
  updateData(){
    this.firstName = this.User['firstName'];
    this.lastName = this.User['lastName'];
    this.middleName = this.User['middleName'];
    this.userName = this.User['login'];
    this.id = this.User['id'];
    this.phoneNumber = this.User['phoneNumber'];
  }
  // call API
  submitForm(){
    const data = {
      id: this.id,
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      phoneNumber: this.phoneNumber
    }
    if(this.AccountType === 'affiliate'){
      if(!this.firstName && 
        !this.lastName && 
        !this.userName &&
        !this.phoneNumber){
          this.notification.alertInfo("Fields cannot be empty")
        }else if(!this.firstName || !this.firstName.trim()){
          this.notification.alertInfo("First name is required")
        }else if(!this.lastName || !this.lastName.trim()){
          this.notification.alertInfo("Last name is required")
        }else if(!this.userName || !this.userName.trim()){
          this.notification.alertInfo("Username is required")
        }else if(!this.phoneNumber){
          this.notification.alertInfo("Phone number is required")
        }else{
          this.rncoService.UpdateAffiliateDetails(data).subscribe((res)=>{
            this.notification.alertSucess("Details Updated successfully!")
          })
          
        }
        }else{
          if(!this.firstName && 
            !this.lastName && 
            !this.userName &&
            !this.phoneNumber){
              this.notification.alertInfo("Fields cannot be empty")
            }else if(!this.firstName || !this.firstName.trim()){
              this.notification.alertInfo("First name is required")
            }else if(!this.lastName || !this.lastName.trim()){
              this.notification.alertInfo("Last name is required")
            }else if(!this.userName || !this.userName.trim()){
              this.notification.alertInfo("Username is required")
            }else if(!this.phoneNumber){
              this.notification.alertInfo("Phone number is required")
            }else{
          this.rncoService.UpdateMerchantDetails(data).subscribe((res)=>{
            this.notification.alertSucess("Details Updated successfully!")
          })
        }
        }
  }
}
