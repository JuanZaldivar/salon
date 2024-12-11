import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrl: './modal-service.component.scss'
  
})
export class ModalServiceComponent {
  

  constructor(public activeModal: NgbActiveModal) {}
}
