import { Injectable } from '@angular/core';
import { detaserviceData } from '../../data/detaservice.data';

@Injectable({
  providedIn: 'root'
})
export class DetaservicesService {
  private datadetaservice = detaserviceData;
  constructor() { }
  /**
   * Funcion que devuelve todos los servicios ofrecidos
   * @returns Regresa un json con todos los servicios ofrecidos
   */
  getdetaservice( ){
    return this.datadetaservice;
  }}

