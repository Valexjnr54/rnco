import { Component, OnInit, Input } from '@angular/core';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {
  @Input() email = ""
  @Input() activationCode: any
  constructor(
    public rncoService: RncoService
  ) { }

  ngOnInit(): void {
  }
  resendLink(){
    this.rncoService.ResendActivationLink(this.email).subscribe(res => 
      console.log(res)
    )
  }
}
