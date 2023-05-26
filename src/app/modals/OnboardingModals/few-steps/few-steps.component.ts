import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-few-steps',
  templateUrl: './few-steps.component.html',
  styleUrls: ['./few-steps.component.scss']
})
export class FewStepsComponent implements OnInit {
  @Output() toNextStageThird = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  nextstep(currentValue: string){
    this.toNextStageThird.emit(currentValue)
  }

}
