import { Component, OnInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empresa } from '../models/empresa';
import { GeneralinfoService } from './services/generalinfo.service';
import { ServicesPro } from './services/services.service';
import { service } from '../models/service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
 import { ModalServiceComponent } from './components/modal-service/modal-service.component'; 

// Import Bootstrap's Modal class
declare var bootstrap: any;


@Component({
  selector: 'app-root',
  standalone: false,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
  
})




export class AppComponent implements OnInit {
  isClicked = false;
  private modalInstance: any;



  
  @ViewChild('test', { static: true }) container : ElementRef | any;
  
  videoUrl: string="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  //videoUrl: string="https://www.tiktok.com/@itskaitk/video/7416247074108312875?autoplay=1";
  getEmbedUrl(): string {
    if (this.videoUrl.includes('youtube.com')) {
      //const videoId = this.videoUrl.split('v=')[1];
      const videoId ='playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI';
      return `https://www.youtube.com/embed/${videoId}&modestbranding=1&rel=0&disablekb=1&autoplay=1&mute=1`;
    } else if (this.videoUrl.includes('tiktok.com')) {
      // Extraer ID de TikTok según el formato de la URL
      const videoId = this.extractTikTokId(this.videoUrl);
      return `https://www.tiktok.com/embed/v2/${videoId}?autoplay=1`;
    }
    

    // Puedes agregar otras plataformas como Vimeo, etc.
    return '';
  }

  private extractTikTokId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1]; // Suponiendo que el ID del video es la última parte
  }

  


  generalinfo!: Empresa;
  servicesinfo!: service[];
  varservices: service  | undefined;
  idsevice: number=0;
  title = 'salon';
  videoId: string = 'dQw4w9WgXcQ'; // ID del video de YouTube
  
  

  
  constructor (private service : GeneralinfoService, private titleService : Title,private renderer: Renderer2, private servicesInfo : ServicesPro, private ModalService :NgbModal  ){
    
    
  }

  onDivClick(id: number) {
    
    this.varservices =this.servicesinfo.find((p) => p.idservice === id);
    if (this.varservices!=null)
      this.modalInstance.show(); 
  }

  openModal1() {
    // Show the modal
  }
  closeModal() {
    this.modalInstance.hide();
  }
  
  ngOnInit(): void {
   this.generalinfo = this.service.getgeneralinfo() ;  
   this.servicesinfo = this.servicesInfo.getservices();
   this.servicesinfo.forEach((servicesinfo) => {
    
    this.addContainer(servicesinfo.idservice,servicesinfo.icon, servicesinfo.name);
    const modalElement = document.getElementById('myModal');
    this.modalInstance = new bootstrap.Modal(modalElement, {
      backdrop: 'static', // optional, prevent closing when clicking outside
      keyboard: false     // optional, prevent closing with Esc key
    });
    
  });
    
  
   this.titleService.setTitle($localize`${this.generalinfo.name}`);
   
  }

  addContainer(id : number, iconcod : string, description : string ) {
     // Crear el contenedor principal
     const containerDiv = this.renderer.createElement('div');
     this.renderer.addClass(containerDiv, 'container');
     this.renderer.addClass(containerDiv, 'cursor-hand');
     this.renderer.addClass(containerDiv, 'white-on-hover');
     this.renderer.addClass(containerDiv, 'white-on-hover1');
     this.renderer.setAttribute(containerDiv, 'id', id.toString());
     this.renderer.listen(containerDiv, 'click', () => {
      this.onDivClick(id);
    });
     
     // Crear el primer div anidado
     const div1 = this.renderer.createElement('div');
     
 
     // Crear el elemento <i> para el primer div con descripción
     const icon = this.renderer.createElement('i');
     this.renderer.addClass(icon, 'demo-icon');
     this.renderer.addClass(icon, 'icon-coloracion'); // Clase del icono de Fontello
     this.renderer.addClass(icon, 'goldGlow');
     this.renderer.addClass(icon, 'icon');
          this.renderer.setProperty(icon, 'innerHTML', iconcod)
     this.renderer.appendChild(div1, icon);

     // Crear el segundo div anidado
     const div2 = this.renderer.createElement('div');
     this.renderer.addClass(div2, 'text-container');
     this.renderer.addClass(div2, 'whiteGlow');
     this.renderer.addClass(div2, 'darken-and-yellow-on-hover');
   
     const text2 = this.renderer.createText(description);
     this.renderer.appendChild(div2, text2);
  
     // Añadir los divs al contenedor
     this.renderer.appendChild(containerDiv, div1);
     this.renderer.appendChild(containerDiv, div2);
 
     // Añadir el contenedor al DOM
     this.renderer.appendChild(this.container.nativeElement, containerDiv);
  }
  
  
}