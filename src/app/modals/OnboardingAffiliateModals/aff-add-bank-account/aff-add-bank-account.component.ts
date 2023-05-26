import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-aff-add-bank-account',
templateUrl: './aff-add-bank-account.component.html',
styleUrls: ['./aff-add-bank-account.component.scss']
})
export class AffAddBankAccountComponent implements OnInit {
@Output() toNextStageFifth = new EventEmitter<string>();
// Variables
accountNumber: string;
financialInstitution: string;
accountType: string;
accountCode: string;
bankDetails = [];
accountName: string;
firstName: string = localStorage.getItem('firstName');
lastName: string = localStorage.getItem('lastName');
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  affBankForm: FormGroup
  ngOnInit(): void {
    this.getBankCodes()
    this.accountName = localStorage.getItem('lastName') + ' ' +  (localStorage.getItem('middleName')  == null ? '': localStorage.getItem('middleName') ) + ' ' + localStorage.getItem('firstName');
    this.affBankForm = new FormGroup({
      accountNumber: new FormControl(null,Validators.required),
      financialInstitution: new FormControl(null,Validators.required),
      accountType: new FormControl(null,Validators.required),
      accountCode: new FormControl(null,Validators.required),
    })

    console.log('accountName' + this.accountName)
  }
  // get bank code function
  getBankCodes = () => {
    console.log('in here' )
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
    const id = localStorage.getItem('userId');
    const data = {
     firstName: this.firstName,
     lastName: this.lastName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
    this.rncoService.AddAffiliateBankAccount(data, id).subscribe((res) => {
      console.log(res);
      localStorage.setItem('userStatus','ADDED_BANK_DETAILS')

      this.notification.alertSucess('Bank Account Added');

      this.toNextStageFifth.emit(currentValue);
    })
  }
 }
  goBack(){
   //
 }

}
