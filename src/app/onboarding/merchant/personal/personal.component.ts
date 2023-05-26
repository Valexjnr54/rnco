import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {Router} from  '@angular/router';
import { NotificationService } from 'app/services/notification';
import { RncoService } from 'app/services/rncoService';
// general state



@Component({
selector: 'app-personal',
templateUrl: './personal.component.html',
styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

constructor(
    public router: Router,
    public rncoService: RncoService,
    public notification: NotificationService,
    
  ) {
 
  }
  // general state
  merchantPersonal:FormGroup;
  
  ngOnInit(): void {
 
  }

  // hide password
  hidePassword = true;
  // hide confirm password;
  hideConPassword = true;
  // confirmed password
  // type checking
  login: string;
  firstName: string;
  lastName: string;
  middleName: string;
  password: string;
  gender: string;
  confirmPassword: string;
  email:string;
  phoneNumber: string;
  dateOfBirth: any
  activationLink: any;
  // process checkers
  submitSucessful: boolean;

  //custom validation
  //check space in firstname & lastname
  noSpaceAllowed():ValidatorFn {
    return(control:AbstractControl):ValidationErrors | null =>{
      if(control.value != null && control.value.indexOf(' ') != -1) return {noSpaceAllowed:true} 
      return null; 
    }
  }
  //check password match
  noPasswordMatch():ValidatorFn{
    return(control:AbstractControl):ValidationErrors | null =>{
      const password : string = control.get('password').value;
      const confirmpassword: string = control.get('confirmPassword').value;

      if(password !== confirmpassword) {
        control.get('confirmPassword').setErrors({noPasswordMatch: true})
      }
      return null;
    }
  }
  // confirm password
  // I'm using Template driven form 
  validEmail: boolean;
  checkEmail(){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.email.match(regex)){
      this.validEmail = true
    } else {
      this.validEmail = false
    }
  }
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
  validDob: boolean;
  checkDob(){
    var today = new Date();
    var birthDate = new Date(this.dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(age < 18){
      this.validDob = false
    } else{
      this.validDob = true
    }
  }
  validPassword: boolean;
  passChecker(){
    if(this.confirmPassword == this.password){
      this.validPassword = true
    }else{
      this.validPassword = false;
    }
  }
  // validate form function
  validateForm(){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNoRegex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;


  if(!this.firstName  && !this.lastName && !this.phoneNumber  && !this.email  && !this.login&& !this.dateOfBirth && !this.gender && !this.password && !this.confirmPassword){
     this.notification.alertInfo("Fields cannot be empty")

  } else if(!this.firstName || !this.firstName.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("First Name is required")
  }else if(!this.lastName || !this.lastName.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("Last Name is required")
    }else if(!this.login || !this.login.trim()){ //to check for null, empty and spaces
         this.notification.alertInfo("Username is required")
    }else if(!this.email || !this.email.trim() || !this.email.match(emailRegex)){ //to check if the email address is valid
         this.notification.alertInfo("Email address not valid")
    }else if(!this.phoneNumber || !this.phoneNumber.trim() || (this.phoneNumber.length !== 11)  || !this.phoneNumber.match(phoneNoRegex)){ //to check if the phone number is valid
         this.notification.alertInfo("Phone Number is required")
     } else if(!this.dateOfBirth || !this.dateOfBirth.trim()|| ((new Date().getFullYear() - (new Date(this.dateOfBirth)).getFullYear())) < 18){ //to check if dob is >= 18
          this.notification.alertInfo("Date of birth required and you must be older than 18 years")
     }else if(!this.gender || !this.gender.trim()){
          this.notification.alertInfo("Gender is required")
     }else if(!this.password || !this.password.trim() || this.password.length < 8 ){
          this.notification.alertInfo("Password is required")
     }else if(!this.confirmPassword || !this.confirmPassword.trim() || this.confirmPassword.length < 8){
          this.notification.alertInfo("Please enter password again ")
     }else if(this.password !== this.confirmPassword){
          this.notification.alertInfo("Passwords do not match")
     }else{
       //this.notification.alertInfo("all valid")
            // start is processing
            const data = {
              login: this.login,
              firstName: this.firstName,
              lastName: this.lastName,
              middleName: this.middleName,
              password: this.password,
              phoneNumber: this.phoneNumber,
              email: this.email,
              dateOfBirth: this.dateOfBirth,
              gender: this.gender
            }
            this.rncoService.RegisterMerchant(data).subscribe((res)=>{
              this.notification.alertSucessMerchant()
              this.submitSucessful = true;
              this.router.navigate(['/confirmEmail']);
            })
          }
    
    }
  
}
