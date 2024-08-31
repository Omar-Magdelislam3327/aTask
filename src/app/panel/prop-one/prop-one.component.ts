import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-prop-one',
  standalone: true,
  imports: [
    NavComponent ,
    FormsModule
  ],
  templateUrl: './prop-one.component.html',
  styleUrl: './prop-one.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PropOneComponent {
  apartBrief : string = "";
  apartDisc : string = "";
  constructor(private router : Router){}
  add(){
    localStorage.setItem("apartmentBrief" , this.apartBrief)
    localStorage.setItem("apartmentDisc" , this.apartDisc)
    this.router.navigate(["propTwo"])
  }
}
