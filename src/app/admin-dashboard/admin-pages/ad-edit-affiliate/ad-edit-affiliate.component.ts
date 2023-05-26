import{Component, OnInit}from '@angular/core';
import {RncoService}from 'app/services/rncoService';
import {ActivatedRoute, Router }from '@angular/router';
import {NotificationService}from 'app/services/notification';

@Component({
selector: 'app-ad-edit-affiliate',
templateUrl: './ad-edit-affiliate.component.html',
styleUrls: ['./ad-edit-affiliate.component.scss']
})
export class AdEditAffiliateComponent implements OnInit {
constructor(
    public rncoservice: RncoService,
    public ActivatedRoute: ActivatedRoute,
    public notification: NotificationService,
    public router: Router
  ) { }
  affiliate: any;
  personal: boolean = true;
  business: boolean;
  affiliateBank: object;
  affiliateId: any;
  bank: boolean;
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
    this.getAffiliate()
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
  getAffiliate(){
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.affiliateId = params.id

      // get affilate Id from params
      // call api to get details
      this.rncoservice.GetAffiliateById(params.id).subscribe(result =>{
console.log('result ===>' + result['firstName'])
        this.affiliateBank = result['bankAccount']
        this.affiliate = result
      })
    })
  }
  goToAffiliate(){
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.router.navigate(['/admin/affiliate'], {queryParams: {id: params.id}})
    })
  }


alignPersonal(){
    this.firstName = this.affiliate['firstName'];
    this.lastName = this.affiliate['lastName'];
    this.middleName = this.affiliate['middleName'];
    this.login = this.affiliate['login'];
    this.id = this.affiliate['id'];
    //this.phoneNumber = this.affiliate['phoneNumber'];
    this.phoneNumber = "0" + this.affiliate['phoneNumber'].slice(3);

    this.email = this.affiliate['email'];
    this.gender = this.affiliate['gender']
  }



  // ====================================================
  // For personal
  // ====================================================
  user: object
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  userName: string;
  id: number;
  phoneNumber: string;
  email: string;
  gender:string;
  // submit function
  submitPersonal(){
    let phoneNoRegex = /[^+-]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;

    if(!this.firstName && !this.lastName && !this.phoneNumber){
      this.notification.alertInfo("Fields cannot be empty")

    }else if(!this.firstName || !this.firstName.trim()){
      this.notification.alertInfo("first Name  is required")

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
      phoneNumber: this.phoneNumber,
    }
    console.log(data)
    this.rncoservice.UpdateAffiliateDetails(data).subscribe(
      (res)=>{
        this.notification.alertSucess('Personal Details updated');

     this.affiliate['firstName'] =  this.firstName;
     this.affiliate['lastName'] =   this.lastName ;
     this.affiliate['middleName'] = this.middleName ;
     this.affiliate['phoneNumber'] = this.phoneNumber ;
      }
)
}

// call function for affiliate update
}
// =====================================================
// For business
// =====================================================
businessName: string;
website: string;
street: string;
city: string;
lga: string;
state: string = 'Edo State';
country: string = 'Nigeria'

alignBusiness(){
    this.businessName = this.affiliate['businessName'];
    this.website = this.affiliate['website']
    this.street = this.affiliate['address'].street;
    this.city = this.affiliate['address'].city;
    this.lga = this.affiliate['address'].lga;

    console.log(this.street);
    console.log(this.city);
    console.log(this.lga);
  }

  // submit function 
  submitBusiness(){

  if(!this.street && !this.city && !this.lga ){
      this.notification.alertSucess('Fields cannot be empty');
  }else if(!this.street || !this.street.trim()){
    this.notification.alertSucess('street is required');
  }else if(!this.city || !this.city.trim()){
    this.notification.alertSucess('city is required');
  }else if (!this.lga || !this.lga.trim()){
    this.notification.alertSucess('LGA is required');
  }else{
        const data= {
          website: this.website,
          address: {
            id: this.affiliate['address']['id'],
            street: this.street,
            city: this.city,
            lga: this.lga,
            state: this.state,
            country: this.country
          },
          
        }
        this.rncoservice.EditAffiliateBusiness(data, this.affiliateId).subscribe(
          (res)=>{
            this.notification.alertSucess('Business Details updated');
           this.affiliate['address']['street'] = this.street ;
           this.affiliate['address']['lga'] = this.lga ;
           this.affiliate['address']['city'] = this.city;
           this.affiliate['website'] =  this.website;
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
    this.accountNumber = this.affiliateBank['accountNo']
    this.accountName = this.affiliate['firstName'] + ' ' +  (this.affiliate['middleName']  == null ? '': this.affiliate['middleName'] ) + ' ' + this.affiliate['lastName'];
//this.accountName   = "kfkfkff"
    this.accountType = this.affiliateBank['accountType']
    this.financialInstitution = this.affiliateBank['bankName']
this.accountCode =  this.affiliateBank['bankCode'];

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
        console.log(this.accountCode);
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
     id: this.affiliateBank['id'],
     accountName: this.accountName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
  this.rncoservice.UpdateAffiliateAccount(data, this.affiliateId).subscribe((res)=>{
    this.notification.alertSucess('Bank Details updated')
    this.affiliateBank['accountNo'] = this.accountNumber
     this.affiliateBank['accountType'] = this.accountType
   this.affiliateBank['bankName']  =   this.financialInstitution
   this.affiliateBank['bankCode'] =  this.accountCode
})

    }
  }


}
