import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import {Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
selector: 'app-aff-upload-kyc',
templateUrl: './aff-upload-kyc.component.html',
styleUrls: ['./aff-upload-kyc.component.scss']
})
export class AffUploadKycComponent implements OnInit {
@Output() toNextStageFourth = new EventEmitter<string>();
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  // Personal File checkers
  personalFile: File = null;
  personalDocName: string;
  personalDocNo: string;
  personalDocType: string;
  personalEntityId: number;

  uploadKcForm:FormGroup
  bizType:string;
  isregistered: boolean;
ngOnInit(): void {
    // checkers
    // Check if user is a registered businesss or not registered
    this.uploadKcForm = new FormGroup({
       personalDocNo: new FormControl(null,Validators.required),
       personalDocType: new FormControl(null,Validators.required)
    })
  };

  // check personal file
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

      this.rncoService.UploadAffiliateDoc(personalModel).subscribe((res)=>{
        localStorage.setItem('userStatus','DOCS_UPLOADED')

        this.notification.alertSucess('Document Added');
        // loader should be added
        this.toNextStageFourth.emit(currentValue)
      })
    }
  }
}
