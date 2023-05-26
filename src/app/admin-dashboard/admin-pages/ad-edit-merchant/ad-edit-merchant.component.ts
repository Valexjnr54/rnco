import{Component, OnInit}from '@angular/core';
import {RncoService}from 'app/services/rncoService';
import {ActivatedRoute, Router }from '@angular/router';
import {NotificationService}from 'app/services/notification';

@Component({
selector: 'app-ad-edit-merchant',
templateUrl: './ad-edit-merchant.component.html',
styleUrls: ['./ad-edit-merchant.component.scss']
})
export class AdEditMerchantComponent implements OnInit {

constructor(
    public rncoservice: RncoService,
    public ActivatedRoute: ActivatedRoute,
    public notification: NotificationService,
    public router: Router
  ) { }
  merchant: any;
  personal: boolean = true;
  business: boolean;
  merchantBank: object;
  bank: boolean;
  merchantID: any;
  registeredBiz : boolean
  businessName: string;

  activated: string = 'personal';
  toggleActivated(x:string){
    this.activated = x
    if(x == 'bank'){
      this.alignBank()
      this.getBankCodes()
    }
    if(x == 'personal'){
      this.alignPersonal()
    }
    if(x == 'business'){
      this.alignBusiness()
    }
  }
  ngOnInit(): void {
    this.getMerchant()
    this.alignPersonal()

  }
  ngAfterViewInit():void{
    this.alignPersonal()
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  // get affiliate details
  getMerchant(){
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.merchantID = params.id
      // get affilate Id from params
      // call api to get details
      this.rncoservice.GetVerifiedMerchant(params.id).subscribe(result =>{
        this.merchantBank = result['bankAccount']
        this.merchant = result
      })
    })
  }
  alignPersonal(){
    this.firstName = this.merchant['firstName'];
    this.lastName = this.merchant['lastName'];
    this.middleName = this.merchant['middleName'];
    this.login = this.merchant['login'];
    this.id = this.merchant['id'];
    //this.phoneNumber = this.merchant['phoneNumber'];
    this.phoneNumber = "0" + this.merchant['phoneNumber'].slice(3);
    this.registeredBiz =  this.merchant['registeredBiz'];
    this.businessName = this.merchant['businessName'];

    this.email = this.merchant['email'];
    this.gender = this.merchant['gender']
  }
  goToMerchant(){
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.router.navigate(['/admin/merchant'], {queryParams: {id: params.id}})
    })
  }
  // ====================================================
  // For personal
  // ====================================================
  user: object
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  id: number;
  phoneNumber: string;
  gender: string;
  email: string;
  // submit function
  submitPersonal(){
    let phoneNoRegex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;

    if(!this.firstName && !this.lastName && !this.phoneNumber){
      this.notification.alertInfo("Fields cannot be empty")
    }else if(!this.firstName || !this.firstName.trim()){
      this.notification.alertInfo("First Name is required")
    }else if(!this.lastName || !this.lastName.trim()){
      this.notification.alertInfo("Last Name is required")
    }else if(!this.phoneNumber || !this.phoneNumber.trim() || (this.phoneNumber.length !== 11)  || !this.phoneNumber.match(phoneNoRegex)){ //to check if the phone number is valid
      this.notification.alertInfo("Phone number is required")
    }else{
      const data = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        phoneNumber: this.phoneNumber
      }
      this.rncoservice.UpdateMerchantDetails(data).subscribe((res)=>{
        this.notification.alertSucess("Details Updated successfully!")

     //update user object on the front end as well
     this.merchant['firstName'] = this.firstName;
     this.merchant['lastName']  = this.lastName ;
     this.merchant['middleName'] = this.middleName ;
     this.merchant['phoneNumber'] = this.phoneNumber;

      })
    }


    // call function for affiliate update
  }




  // =====================================================
  // For business
  // =====================================================
 // businessName: string;
  website: string;
  street: string;
  city: string;
  lga: string;
  state: string = 'Edo State';
  country: string = 'Nigeria';

  alignBusiness(){
    this.businessName = this.merchant['businessName'];
    this.website = this.merchant['website']
    this.street = this.merchant['address'].street;
    this.city = this.merchant['address'].city;
    this.lga = this.merchant['address'].lga;
    this.registeredBiz =  this.merchant['registeredBiz'];

    console.log(this.street);
    console.log(this.city);
    console.log(this.lga);
    console.log('registeredBiz::::' + this.registeredBiz);
  }
  // submit function 
  submitBusiness(){

    if( !this.street && !this.city && !this.lga ){
      this.notification.alertInfo("Fields cannot be empty")
    }else if(!this.street || !this.street.trim()){
      this.notification.alertInfo("street is required")
    }else if (!this.city || !this.city.trim()){
      this.notification.alertInfo("city is required")
    }else if(!this.lga || !this.lga.trim()){
      this.notification.alertInfo("LGA is required")
    }else{
  console.log('businessname' + this.businessName)

      const data= {
              businessName: this.businessName,
              website: this.website,
             registeredBiz: this.registeredBiz,
       merchantConfig: {
            id: this.merchant['merchantConfig']['id'],
            channel: 'WHATSAPP',
            payment: 'EXTERNAL',
            payoutProvider: 'PAYSTACK',
          },
              address: {
               id: this.merchant['address']['id'],
                street: this.street,
                city: this.city,
                lga: this.lga,
                state: this.state,
                country: this.country
              },
    }

    this.rncoservice.EditMerchantBusinessDetails(data, this.merchantID).subscribe(
      (res)=>{
      this.notification.alertSucess('Business Details updated');
     this.merchant['website'] =  this.website;
     this.merchant['address'].street =   this.street;
     this.merchant['address'].city = this.city ;
     this.merchant['address'].lga = this.lga;
      }
)

}
}
// ==============================================
// For account
// ==============================================
accountNumber:any;
accountCode: string;
accountName: string;
accountType: any;
bankDetails = [];
financialInstitution: string;
alignBank(){
    this.accountNumber = this.merchantBank['accountNo']
    this.accountName = this.registeredBiz == true ? this.businessName :(this.merchantBank['firstName'] + ' ' +  (this.merchantBank['middleName']  == null ? '': this.merchantBank['middleName'] ) + ' ' + this.merchantBank['lastName']);
    this.accountType = this.merchantBank['accountType']
    this.financialInstitution = this.merchantBank['bankName']
    this.accountCode =  this.merchantBank['bankCode'];

  }
  getBankCodes = () => {
    this.rncoservice.GetBankCode().subscribe((res)=>{
      const BankData = res['data'];
      // loop throught bank data;
      for (let i = 0; i < BankData.length; i++) {
        const bankData = {
          name: BankData[i].name,
          code: BankData[i].code
        }
        this.bankDetails.push(bankData)
      }
    })
  }
  getCode(){
    for(let i = 0; i < this.bankDetails.length; i++){
      if(this.bankDetails[i].name == this.financialInstitution){
        const requiredCode = this.bankDetails[i];
        this.accountCode = requiredCode.code;
        return this.accountCode;
      }
    }
  }


  updateAccount(){
    if(!this.accountNumber && !this.accountType && !this.financialInstitution){
      this.notification.alertInfo("Fields cannot be empty")

    }else if(!this.accountNumber || !this.accountNumber.trim() ||  this.accountNumber.trim().length !== 10 ){ //to check for null, empty and spaces
      this.notification.alertInfo("Account Number is required")

    }else if(!this.accountType || !this.accountType.trim()){
      this.notification.alertInfo("Account Type is required")

    }else if(!this.financialInstitution || !this.financialInstitution.trim()){
       this.notification.alertInfo("Financial Institution is required")
    }else{
  const data = {
     id: this.merchantBank['id'],
     accountName: this.accountName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
  this.rncoservice.UpdateMerchantaccount(data, this.merchantID).subscribe((res)=>{
    this.notification.alertSucess('Bank Details updated')
    this.merchantBank['accountNo'] = this.accountNumber
     this.merchantBank['accountType'] = this.accountType
   this.merchantBank['bankName']  =   this.financialInstitution
   this.merchantBank['bankCode'] =  this.accountCode
})

    }
  }
}
