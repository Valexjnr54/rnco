import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-aff-few-steps',
  templateUrl: './aff-few-steps.component.html',
  styleUrls: ['./aff-few-steps.component.scss']
})
export class AffFewStepsComponent implements OnInit {
  @Output() toNextStageThird = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  nextstep(currentValue: string){
    this.toNextStageThird.emit(currentValue)
  }
}
