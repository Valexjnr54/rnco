import{Component, OnInit, Output, EventEmitter}from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators}from '@angular/forms';
import {Router}from  '@angular/router';
import {NotificationService }from 'app/services/notification';
import {RncoService}from 'app/services/rncoService';

@Component({
selector: 'app-ad-personal',
templateUrl: './ad-personal.component.html',
styleUrls: ['./ad-personal.component.scss']
})
export class AdPersonalComponent implements OnInit {
// hide password
hidePassword = true;
// hide confirm password;
hideConPassword = true;
// confirmed password
isConfirmed: boolean;
// type checking
login: string;
firstName: string;
lastName: string;
middleName: string;
password: string;
confirmPassword: string;
email:string;
phoneNumber: string;
dateOfBirth: any;
// process checkers
submitSucessful: boolean;
constructor(
  public fb: FormBuilder,
  public router: Router,
  public rncoService: RncoService,
  public notification: NotificationService,

) {

}
  
// general state
@Output() toNextStage = new EventEmitter<string>();
@Output() passDetails = new EventEmitter<any>()

userObject = {
  firstName: '',
  lastName: '',
  userId: '',
  login: ''
}

adMerchantPersonalForm:FormGroup
  ngOnInit(): void {
     
}

 
validEmail: boolean;
  checkEmail(){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.email.match(regex)){
      this.validEmail = true
    } else {
      this.validEmail = false
    }
  }
// confirm password
// I'm using Template driven form 
validMobile: boolean;
  checkMobile(){
    let regex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if(this.phoneNumber.length < 9 || this.phoneNumber.length >12){
      this.validMobile = false
    } else{
      if(this.phoneNumber.match(regex)){
        this.validMobile = true
      } else {
        this.validMobile = false
      }
    }
  }
  
passChecker(){
  if (this.confirmPassword !== ""){
    if(this.confirmPassword == this.password){
      this.isConfirmed = true;
    }else{
      this.isConfirmed = false
    }
  }
}
 checkDob(): boolean{
   var today = new Date();
   var birthDate = new Date(this.dateOfBirth);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if(age < 18){
    return false
   } else{
     return true
   }
 }




// validate form function
validateForm(currentValue: any){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNoRegex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;


  if(!this.firstName  && !this.lastName&& !this.phoneNumber  && !this.email  && !this.login&& !this.dateOfBirth){
     this.notification.alertInfo("Fields cannot be empty")

  } else if(!this.firstName || !this.firstName.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("First Name is required")
  }else if(!this.lastName || !this.lastName.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("Last Name is required")
    }else if(!this.login || !this.login.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("Username is required")
    }else if(!this.email || !this.email.trim() || !this.email.match(emailRegex)){ //to check if the email address is valid
         this.notification.alertInfo("Email address not valid")
    }else if(!this.phoneNumber || !this.phoneNumber.trim() || (this.phoneNumber.length !== 11) || !this.phoneNumber.match(phoneNoRegex)){ //to check if the phone number is valid
         this.notification.alertInfo("Phone Number is required")
     } else if(!this.dateOfBirth || !this.dateOfBirth.trim()|| ((new Date().getFullYear() - (new Date(this.dateOfBirth)).getFullYear())) < 18){ //to check if dob is >= 18
          this.notification.alertInfo("Date of birth required and you must be older than 18 years")
     }
     //todo: handle dob month
    else {
//       this.notification.alertInfo("all valid")

          const data = {
          login: this.login,
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim(),
          middleName: this.middleName,
          password: this.password,
          phoneNumber: this.phoneNumber,
          email: this.email,
          dateOfBirth: this.dateOfBirth
        }

        this.rncoService.AdminRegisterMerchant(data).subscribe((res)=>{
          console.log('sucess!');
          console.log(res);
          // pass details
          this.userObject.firstName = res['firstName'];
          this.userObject.lastName = res['lastName'];
          // this.userObject.login = res['login'];
          this.userObject.userId = res['id']
          console.log("From Personal:")
          console.log(this.userObject)
          this.notification.alertSucessMerchant()
          // move to next
          this.passDetails.emit(this.userObject)
          this.toNextStage.emit(currentValue)
        })

       }

}

}