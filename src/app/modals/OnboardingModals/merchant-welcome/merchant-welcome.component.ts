import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merchant-welcome',
  templateUrl: './merchant-welcome.component.html',
  styleUrls: ['./merchant-welcome.component.scss']
})
export class MerchantWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() toNextStage = new EventEmitter<string>();

  moveToNextStage(currentValue:string){
    this.toNextStage.emit(currentValue);
  }
}
