import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { apartment } from '../modules/Apartment';
import { ApartmentFunctionServiceService } from '../../services/apartment-function-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-prop-two',
  standalone: true,
  imports: [
    NavComponent , FormsModule
  ],
  templateUrl: './prop-two.component.html',
  styleUrl: './prop-two.component.css',
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
export class PropTwoComponent {
  apartDesign : string = "";
  apartment: apartment = new apartment();
  brief!:string;
  disc!:string;

  constructor(private api: ApartmentFunctionServiceService , private router : Router){
    this.brief = localStorage.getItem('apartmentBrief') || '';
    this.disc = localStorage.getItem('apartmentDisc') || '';
  }
  add(){
    localStorage.setItem("apartmentDesign" , this.apartDesign)
    this.router.navigate(["propTwo"])
  }
  finishForm() {
    this.add();
    this.apartment.name = localStorage.getItem('apartmentName') || '';
    this.apartment.location = localStorage.getItem('apartmentLocation') || '';
    this.apartment.type = localStorage.getItem('apartmentType') || '';
    this.apartment.brief = localStorage.getItem('apartmentBrief') || '';
    this.apartment.disc = localStorage.getItem('apartmentDisc') || '';
    this.apartment.design = localStorage.getItem('apartmentDesign') || '';

    this.api.post(this.apartment).subscribe(
      (data:any) => {
        this.clearLocalStorage();
      }
    );
    this.router.navigate(["submit"]);
  }

  clearLocalStorage() {
    localStorage.removeItem('apartmentName');
    localStorage.removeItem('apartmentLocation');
    localStorage.removeItem('apartmentType');
    localStorage.removeItem('apartmentBrief');
    localStorage.removeItem('apartmentDisc');
    localStorage.removeItem('apartmentDesign');
  }
}
