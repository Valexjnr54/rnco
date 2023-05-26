import { Component, OnInit, Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import {Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-ad-aff-upload-kyc',
templateUrl: './ad-aff-upload-kyc.component.html',
styleUrls: ['./ad-aff-upload-kyc.component.scss']
})
export class AdAffUploadKycComponent implements OnInit {
@Output() toNextStageThird = new EventEmitter<string>();
@Input() userId = ''
constructor(
    public rncoService: RncoService,
    public notification: NotificationService
  ) { }
  // Personal File checkers
  personalDocName: string;
  personalDocNo: string;
  personalDocType: string;
  personalEntityId: number;


  ngOnInit(): void {
  
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
    const id = this.userId
    const entityId = parseInt(id)
    // Start of personal Data upload
    const personalModel:object = {
      docName: this.personalDocType,
      docUniqueNo: this.personalDocNo,
      documentType: this.personalDocType,
      entityId: entityId,
    }
    console.log(personalModel)
    // End of personal Data upload
    // send personal Data to API client
      this.rncoService.UploadAffiliateDoc(personalModel).subscribe((res)=>{
        console.log(res);
        this.notification.alertSucess('Document Added');
        // loader should be added
        this.toNextStageThird.emit(currentValue)
      })
    }
  }
}
