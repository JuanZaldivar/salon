import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DetaservicesService } from '../../services/detaservices.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnChanges {
  vardetaservice : any;
  bandcarrousel : boolean=false;
  currentIndex: number = 0;
  @Input() id:number| undefined;
  
  constructor(private  datadetaservice : DetaservicesService) {  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (this.id!=0){
      this.vardetaservice = this.datadetaservice.getdetaservice()  ;  
    this.vardetaservice = this.vardetaservice.find(( p : any) => p.idservice==this.id  );
    if (this.vardetaservice.detaservice.package === null)    
      this.bandcarrousel=true;
    else
      this.bandcarrousel=false;
    }
   
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.vardetaservice.detaservice.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.vardetaservice.detaservice.length) % this.vardetaservice.detaservice.length;
  }
}





