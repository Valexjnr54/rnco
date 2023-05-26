import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aff-termsand-conditions',
  templateUrl: './aff-termsand-conditions.component.html',
  styleUrls: ['./aff-termsand-conditions.component.scss']
})
export class AffTermsandConditionsComponent implements OnInit {
 @Output () completeRegistration = new EventEmitter<any>();
  constructor() { }
   cansubmit = true;
   affTerms :FormGroup
  ngOnInit(): void {
    this.affTerms = new FormGroup({
      cansubmit : new FormControl(null,Validators.required)
    })
  }

  
  submit() {
    this.completeRegistration.emit()
  }
}
