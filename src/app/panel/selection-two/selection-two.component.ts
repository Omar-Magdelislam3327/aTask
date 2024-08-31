import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { ApartmentFunctionServiceService } from '../../services/apartment-function-service.service';
import { apartment } from '../modules/Apartment';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-selection-two',
  standalone: true,
  imports: [NavComponent , FormsModule],
  templateUrl: './selection-two.component.html',
  styleUrl: './selection-two.component.css',
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
export class SelectionTwoComponent {
  apartment: apartment = new apartment();
  apartType:string = "";
  constructor( private router : Router){}
  add(){
    localStorage.setItem("apartmentType" , this.apartType)
    this.router.navigate(["propOne"])
  }
}
