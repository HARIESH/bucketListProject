import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(["I want to build a own house", "I want to buy a car","I want to visit Switzerland"])
  goal = this.goals.asObservable(); 
  constructor() { }
  changeGoals(goal: any) {
    this.goals.next(goal);
  }
}
