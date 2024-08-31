import { apartment } from './../modules/Apartment';
import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { ApartmentFunctionServiceService } from '../../services/apartment-function-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-selection-one',
  standalone: true,
  imports: [
    NavComponent,
    FormsModule
  ],
  templateUrl: './selection-one.component.html',
  styleUrl: './selection-one.component.css',
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
export class SelectionOneComponent {
  apart = new apartment();
  apartLocation: string = '';
  constructor(private router : Router){
  }
  add(){
    localStorage.setItem('apartmentLocation', this.apartLocation);
    this.router.navigate(["selectTwo"])
  }
}
