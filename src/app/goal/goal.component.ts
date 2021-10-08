import { Component, OnInit } from '@angular/core';
import{Goal} from '../goal'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  styles:['h1{color: #ffd900}']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [

  new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019,9,10)),
  new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2021,11,10)),
  new Goal(3,'Get new Phone Case','Alphonce has his birthday coming up soon', new Date(2021,9,10)),
  new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2022,0,10)),
  new Goal(5,'Solve math homework','Damn Math', new Date(2021,10,10)),
  new Goal(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2022,7,10)),
];

toggleDetails(index:any){
  this.goals[index].showDescription = !this.goals[index].showDescription;
}
addNewGoal(goal: Goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}
deleteGoal(isComplete: any, index: number){
  if (isComplete) {
    let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
    
    if(toDelete){
      this.goals.splice(index,1);
  
    }
  }
  
}
  constructor() { }

  ngOnInit(): void {
  }

}

  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies' ,description:'I have to buy cookies for the parrot'},
  //    {id:3,name:'Get new Phone Case' ,description:'Diana has her birthday coming up soon'},
  //    {id:4,name:'Get Dog Food' ,description:'Pupper likes expensive sancks'},
  //    {id:5,name:'Solve math homework' ,description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan' ,description:'Cause I am an evil overlord'},
  //  ];