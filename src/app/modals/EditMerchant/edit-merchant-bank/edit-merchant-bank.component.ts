import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'app/services/notification';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-edit-merchant-bank',
  templateUrl: './edit-merchant-bank.component.html',
  styleUrls: ['./edit-merchant-bank.component.scss']
})
export class EditMerchantBankComponent implements OnInit {
@Input() User:object
  constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  accountName: any
  accountNumber: string 
  accountType: any
  financialInstitution: string
  bankDetails = [];
  accountCode: string;
  isBank:false


  ngOnInit(): void {
    this.getBankCodes()
    this.alignBankDetails()
  }

  alignBankDetails() {
    this.accountNumber = this.User['bankAccount']['accountNo'];
    this.accountName =  this.User['registeredBiz'] ? this.User['businessName'] :this.User['firstName'] + ' ' +  (this.User['middleName']  == null ? '': this.User['middleName'] ) + ' ' + this.User['lastName'];
    this.accountType = this.User['bankAccount']['accountType'];
    this.financialInstitution =this.User['bankAccount']['bankName'];
    this.accountCode =  this.User['bankAccount']['bankCode'];

    console.log('acctCode' +this.accountCode );
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
   if(!this.accountNumber && !this.financialInstitution && !this.accountType){
       this.notification.alertInfo('Fields cannot be empty')
    }else if(!this.accountNumber || !this.accountNumber.trim() ||  this.accountNumber.trim().length !== 10 ){ //to check for null, empty and spaces
       this.notification.alertInfo("Account number is required and must be 10 digits")
    }else if(!this.accountType || !this.accountType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Account Type is required")
    }else if(!this.financialInstitution || !this.financialInstitution.trim() ){ //to check for null, empty and spaces
       this.notification.alertInfo("Financial Institution is required")
    }else{

     const id = localStorage.getItem('userId');
    const data = {
     id: this.User['bankAccount']['id'],
     accountName: this.accountName,
     accountNo: this.accountNumber,
     bankName: this.financialInstitution,
     accountType: this.accountType,
     bankCode: this.accountCode
    }
    console.log(data)
    // make API call
    this.rncoService.UpdateMerchantaccount(data, id).subscribe((res)=>{
    this.notification.alertSucess('Bank Details updated')
    this.updateUserObject();
   })
    }
  }

  updateUserObject(){
    this.User['bankAccount']['accountNo'] = this.accountNumber;
    this.User['bankAccount']['accountType'] =  this.accountType;
    this.User['bankAccount']['bankName'] =  this.financialInstitution;
    this.User['bankAccount']['bankCode'] =  this.accountCode;
  }
}
