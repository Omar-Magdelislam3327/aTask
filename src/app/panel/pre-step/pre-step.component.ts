import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { apartment } from '../modules/Apartment';
import { ApartmentFunctionServiceService } from '../../services/apartment-function-service.service';
import { Router , RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pre-step',
  standalone: true,
  imports: [FormsModule ,RouterLink , CommonModule],
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
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
export class PreStepComponent {
  apart: apartment = new apartment();
  apartName: string = '';
  constructor(private api : ApartmentFunctionServiceService , private router : Router){}

  add(){
    localStorage.setItem('apartmentName', this.apartName);
      this.router.navigate(["selectOne"])
  }
}
