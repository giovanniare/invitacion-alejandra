import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-gran-dia',
  standalone: true,
  imports: [],
  templateUrl: './gran-dia.component.html',
  styleUrl: './gran-dia.component.css'
})
export class GranDiaComponent {

}

/*export class GranDiaComponent implements AfterViewInit {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para la sección completa cuando entra en pantalla
    gsap.to("#gran-dia", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#gran-dia",
        start: "top 80%", // Inicia cuando la parte superior de la sección llega al 80% de la pantalla
        toggleActions: "play none none none"
      }
    });

    // Animación para el título "El Gran Día"
    gsap.from("h2", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "h2",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Animación para los ítems del itinerario
    gsap.from("ol li", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.3, // Hace que los ítems aparezcan uno por uno con 0.3s de diferencia
      ease: "power2.out",
      scrollTrigger: {
        trigger: "ol",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }
}*/