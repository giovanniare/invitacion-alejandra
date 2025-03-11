import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { HistoriaComponent } from '../historia/historia.component';
import { GranDiaComponent } from '../gran-dia/gran-dia.component';

@Component({
  selector: 'app-home',
  imports: [HistoriaComponent, GranDiaComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.fromTo("#titulo", 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      gsap.fromTo("#imagenPareja", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      );

      gsap.fromTo("#botonRSVP", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
      );
    }
  }
}