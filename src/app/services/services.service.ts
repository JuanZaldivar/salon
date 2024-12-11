import { Injectable } from '@angular/core';
import { serviceData } from '../../data/service.data';
import { service } from '../../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesPro {
  private services : service[] = serviceData;
  constructor() { 
    
  }
  getservices() :service[] {
    return this.services;
  }
}