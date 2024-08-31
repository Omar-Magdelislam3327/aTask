import { Injectable } from '@angular/core';
import { apartment } from '../panel/modules/Apartment';
import { HttpClient } from '@angular/common/http';
import { ApiFunctionServiceService } from './api-function-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentFunctionServiceService extends ApiFunctionServiceService<apartment> {

  constructor(protected override http: HttpClient) {
    super("http://localhost:3000/apartments", http);
  }
}
