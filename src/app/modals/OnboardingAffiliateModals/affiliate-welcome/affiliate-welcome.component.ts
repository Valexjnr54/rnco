import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-affiliate-welcome',
  templateUrl: './affiliate-welcome.component.html',
  styleUrls: ['./affiliate-welcome.component.scss']
})
export class AffiliateWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() toNextStage = new EventEmitter<string>();

  moveToNextStage(currentValue:string){
    this.toNextStage.emit(currentValue);
  }
}
