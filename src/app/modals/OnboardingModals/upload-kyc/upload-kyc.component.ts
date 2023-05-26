import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import {Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
selector: 'app-upload-kyc',
templateUrl: './upload-kyc.component.html',
styleUrls: ['./upload-kyc.component.scss']
})

export class UploadKYCComponent implements OnInit {
@Output() toNextStageFourth = new EventEmitter<string>();
@Input() isOnboarderRegistered:boolean
public isregistered: any
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  // Personal File checkers
  personalDocName: string;
  personalDocNo: string;
  personalDocType: string;
  personalEntityId: number;

  // Business File checkers
  businessType: string;
  businessDocName: string;
  businessDocNo: string;
  businessDocType: string;
  businessEntityId: string;
  bizType:string;
  registeredBiz: boolean;
  checkRegistered(){
    // this.isregistered = localStorage.getItem('registerdBiz');
    // get user object
    const id = localStorage.getItem('userId');
    // this.rncoService.GetVerifiedMerchant(id).subscribe((res)=>{
    //   console.log(res['registeredBiz'])
    //   this.isregistered = res['registeredBiz']
    // })
    //this.isregistered = this.isOnboarderRegistered.valueOf();
    this.bizType = localStorage.getItem('onBoardingStatus');
    if(this.bizType === 'registered'){
      this.isregistered = true
  }else{
      this.isregistered = false
  }
    
    console.log(this.isregistered);
  }
  uploadForm: FormGroup
   ngOnInit(): void {
    this.checkRegistered()
    this.uploadForm = new FormGroup({
      personalDocNo: new FormControl(null,Validators.required),
      personalDocType: new FormControl(null, Validators.required),
      businessType: new FormControl(null, Validators.required),
      businessDocType: new FormControl(null, Validators.required),
      businessDocNo: new FormControl(null, Validators.required)

    })
  };

  uploadPersonalFiles(currentValue: string){
     if(!this.personalDocType  && !this.personalDocNo){
    console.log('personal files');
     this.notification.alertInfo("Fields cannot be empty")
    } else if(!this.personalDocType || !this.personalDocType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Type is required")
   } else if(!this.personalDocNo || !this.personalDocNo.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Number is required")
   }else{

   const id = localStorage.getItem('userId')
    const entityId = parseInt(id)
    // Start of personal Data upload
    const personalModel:object = {
      docName: this.personalDocType,
      docUniqueNo: this.personalDocNo,
      documentType: this.personalDocType,
      entityId: entityId,
    }
    // End of personal Data upload
    // send personal Data to API client
    
    this.rncoService.UploadMerchantDoc(personalModel).subscribe((res)=>{
      localStorage.setItem('userStatus','DOCS_UPLOADED')
      this.notification.alertSucess('Document Added');
      this.toNextStageFourth.emit(currentValue)
    })
   }
  }

  uploadBusinessFiles(currentValue){
   if(!this.businessDocType && !this.businessDocNo && !this.businessType){
     this.notification.alertInfo("Fields cannot be empty")
  }else if(!this.businessType || !this.businessType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Business Type is required")
  }else if(!this.businessDocType || !this.businessDocType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Type is required")
  } else if(!this.businessDocNo || !this.businessDocNo.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Number is required")
  }else{
    const id = localStorage.getItem('userId')
    const entityId = parseInt(id)
    // Start of business Data upload

    const businessData = {
        docName: this.businessDocType,
        docUniqueNo: this.businessDocNo,
        documentType: this.businessDocType,
        entityId: entityId,
        businessType: this.businessType
    }
    this.rncoService.UploadMerchantDoc(businessData).subscribe((res)=>{
      localStorage.setItem('userStatus','DOCS_UPLOADED')
      this.notification.alertSucess('Document Added')
      this.toNextStageFourth.emit(currentValue)
    })
   }
 }
}
