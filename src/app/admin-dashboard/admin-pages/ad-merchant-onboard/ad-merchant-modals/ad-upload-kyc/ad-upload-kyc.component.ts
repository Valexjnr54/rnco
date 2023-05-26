import { Component, OnInit, } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import {Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'app-ad-upload-kyc',
templateUrl: './ad-upload-kyc.component.html',
styleUrls: ['./ad-upload-kyc.component.scss']
})
export class AdUploadKycComponent implements OnInit {
@Output() toNextStageThird = new EventEmitter<string>();
@Input() isBusinessRegistered: any
@Input() userId = '';
registeredBusiness: any
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
  businessDocName: string;
  businessDocNo: string;
  businessDocType: string;
  businessType: string
  businessEntityId: string;
  // check if business is registered

  uploadForm: FormGroup

  ngOnInit(): void {
     this.uploadForm = new FormGroup({
      personalDocNo: new FormControl(null,Validators.required),
      personalDocType: new FormControl(null,Validators.required),
      businessDocNo: new FormControl(null,Validators.required),
      businessDocType: new FormControl(null,Validators.required),
      businessType: new FormControl(null,Validators.required),
    });

    // checkers
    // Check if user is a registered businesss or not registered
    this.checkbusiness()
  };
  checkbusiness(){
    const id = this.userId;
    this.rncoService.GetVerifiedMerchant(id).subscribe((res)=>{
      this.registeredBusiness = res['registeredBiz']  //todo: to be fixe
    })
  }


  uploadPersonalFiles(currentValue: string){
    if(!this.personalDocType  && !this.personalDocNo){
    console.log('personal files');
     this.notification.alertInfo("Fields cannot be empty")
    } else if(!this.personalDocType || !this.personalDocType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Type is required")
   } else if(!this.personalDocNo || !this.personalDocNo.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Number is required")
   }else{

    const id = this.userId
    // this won't work, we need the userId
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
      console.log(res);
      this.notification.alertSucess('Document Added');
      this.toNextStageThird.emit(currentValue)
    })
   }
  }


  uploadBusinessFiles(currentValue: any){
  if(!this.businessDocType && !this.businessDocNo && !this.businessType){
     this.notification.alertInfo("Fields cannot be empty")
  }else if(!this.businessType || !this.businessType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Business Type is required")
  }else if(!this.businessDocType || !this.businessDocType.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Type is required")
  } else if(!this.businessDocNo || !this.businessDocNo.trim()){ //to check for null, empty and spaces
       this.notification.alertInfo("Document Number is required")
  }else{

    // ====================================
    // This won't work we need the user Id
    const id = this.userId
    // ==================================
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
      console.log(res);
      this.notification.alertSucess('Document Added');
      this.toNextStageThird.emit(currentValue)
    })
  }
}

}