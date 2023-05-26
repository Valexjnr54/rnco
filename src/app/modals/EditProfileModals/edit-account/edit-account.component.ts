import { Component, OnInit, Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  @Input() userBank:object
  @Input() AccountType: any
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  accountNumber:any;
  accountCode: string;
  accountName: string;
  accountType: any;
  bankDetails = [];
  financialInstitution: string;

  bankForm:FormGroup
  ngOnInit(): void {
    this.getBankCodes()
    this.alignItem()

   
  }
  alignItem(){
    this.accountNumber = this.userBank['accountNo']
    this.accountName = this.userBank['lastName'] + ' ' + this.userBank['firstName']
    this.accountType = this.userBank['accountType']
    this.financialInstitution = this.userBank['bankName']
  }
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

  updatebank() {
    if (this.AccountType == 'affiliate') {
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
     accountName: this.accountName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
    this.rncoService.UpdateAffiliateAccount(data, id).subscribe((res)=>{
     

      this.notification.alertSucess('Bank Account Added')

    })
    }
    } else {
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
     accountName: this.accountName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
    this.rncoService.UpdateMerchantaccount(data, id).subscribe((res)=>{
      

      this.notification.alertSucess('Bank Account Added')

    })
    }
    }
    
  }
}
