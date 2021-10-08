import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Goal} from '../goal';//imports the Goal blueprint class

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newGoal=new Goal(0,"","",new Date());//created a newGoal property and assigned it to the Goal class that takes in the format we have been using in creating goals.
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
