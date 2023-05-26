import { Component, OnInit, Input } from '@angular/core';
import { RncoService } from '../../../services/rncoService';
import { NotificationService } from '../../../services/notification'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-affiliate-personal',
  templateUrl: './edit-affiliate-personal.component.html',
  styleUrls: ['./edit-affiliate-personal.component.scss']
})
export class EditAffiliatePersonalComponent implements OnInit {
  @Input() User:object
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService,
    public ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.alignPersonal()
    console.log(this.alignPersonal())
  }
  ngAfterViewInit():void{
    this.alignPersonal()
  }


  firstName: string;
  lastName: string;
  middleName: string;
  userName: string;
  //gender: string;
  email: string;
  phonenumber: string;

  isdetails: false;
  id: number;

  alignPersonal(){
     this.firstName = this.User['firstName'];
    this.lastName = this.User['lastName'];
    this.middleName = this.User['middleName'];
    this.userName = this.User['login'];
    //this.phonenumber = this.User['phoneNumber'];
    this.phonenumber = "0" + this.User['phoneNumber'].slice(3);
    this.email = this.User['email'];
   // this.gender = this.User['gender'];
    this.id = this.User['id'];
  }


submitForm(){
    let phoneNoRegex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;


  if(!this.firstName  && !this.lastName && !this.phonenumber){
     this.notification.alertInfo("Fields cannot be empty")

  } else if(!this.firstName || !this.firstName.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("First Name is required")
  }else if(!this.lastName || !this.lastName.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("Last Name is required")
    }else if(!this.phonenumber || !this.phonenumber.trim() || (this.phonenumber.length !== 11)  || !this.phonenumber.match(phoneNoRegex)){ //to check if the phone number is valid
         this.notification.alertInfo("Phone Number is required")
     } else{
         const data = {
      id:this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      phoneNumber: this.phonenumber,
    }
    console.log(this.id)
      this.rncoService.UpdateAffiliateDetails(data).subscribe((res)=>{
        this.notification.alertSucess("Personal Info Updated successfully!")
        //update user object on the front end as well
        this.updateUserObject()
      })
    }
   }

 updateUserObject(){
    this.User['firstName'] = this.firstName;
     this.User['lastName']  = this.lastName ;
    this.User['middleName'] = this.middleName ;
    this.User['phoneNumber'] = this.phonenumber;
  }

//todo: change phone number ui to match onboarding ui and vaidation logic for phone number

}
