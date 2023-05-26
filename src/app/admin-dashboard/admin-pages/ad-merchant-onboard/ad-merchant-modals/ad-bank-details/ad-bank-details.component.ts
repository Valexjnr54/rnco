import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'app-ad-bank-details',
templateUrl: './ad-bank-details.component.html',
styleUrls: ['./ad-bank-details.component.scss']
})
export class AdBankDetailsComponent implements OnInit {
@Output() toNextStageFourth = new EventEmitter<string>();
@Input() user: any
// Variables
accountNumber: string;
financialInstitution: string;
accountType: string;
accountCode: string;
bankDetails = [];
accountName: string;
firstName: string;
lastName: string;

constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }

  adBankDetailsForm:FormGroup
  ngOnInit(): void {
    this.getBankCodes()
    //this.accountName = this.user['firstName'] + " " + this.user['lastName'];
    this.accountName = this.user['firstName'] + ' ' +  (this.user['middleName']  == null ? '': this.user['middleName'] ) + ' ' + this.user['lastName'];


   this.adBankDetailsForm = new FormGroup({
      accountNumber: new FormControl(null, Validators.required),
      financialInstitution: new FormControl(null, Validators.required),
      accountType: new FormControl(null, Validators.required),
      accountCode: new FormControl(null, Validators.required)
    })
  }
  // get bank code function
  getBankCodes = () => {
    this.rncoService.GetBankCode().subscribe((res)=>{
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
    console.log('trying to get bank codes')
  }
  getCode(){
    for(let i = 0; i < this.bankDetails.length; i++){
      console.log(this.financialInstitution)
      if(this.bankDetails[i].name == this.financialInstitution){
        const requiredCode = this.bankDetails[i];
        this.accountCode = requiredCode.code;
        console.log(this.accountCode);
        return this.accountCode;
      }
    }
  }
  submitDetails(currentValue: string){
    if(!this.accountNumber && !this.financialInstitution && !this.accountType){
       this.notification.alertInfo('Fields cannot be empty')
    }else if(!this.accountNumber || !this.accountNumber.trim() ||  this.accountNumber.trim().length !== 10 ){ //to check for null, empty and spaces
       this.notification.alertInfo("Account number is required and must be 10 digits")
    }else if(!this.financialInstitution || !this.financialInstitution.trim() ){ //to check for null, empty and spaces
       this.notification.alertInfo("Financial Institution is required")
    }else if(!this.accountType || !this.accountType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Account Type is required")
    }else{
     const id = this.user['userId'];
     const data = {
     firstName: this.user['firstName'],
     lastName: this.user['lastName'],
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
    this.rncoService.AddMerchantBankAccount(data, id, true).subscribe((res)=>{
      console.log(res);
      this.notification.alertSucess('Bank Account Added')
      this.toNextStageFourth.emit(currentValue)
    })
    }
  }
}
