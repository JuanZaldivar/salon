import { Injectable } from '@angular/core';
import { empresaData } from '../../data/generalinfo.data';
import { Empresa } from '../../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class GeneralinfoService {
  private empresa : Empresa = empresaData;
  constructor() { 
    
  }
  getgeneralinfo() :Empresa {
    return this.empresa;
  }
}