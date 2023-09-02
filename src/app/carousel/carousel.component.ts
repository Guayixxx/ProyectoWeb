import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { src: 'https://thumbs.dreamstime.com/b/ca%C3%ADdas-horizontales-35225210.jpg' },
    { src: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' },
    { src: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }
  ];

  currentIndex = 0;

  ngOnInit() {
    // Iniciar la transición automática cada 5 segundos
    setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia 5000 a la cantidad de milisegundos que deseas para el intervalo
  }

  showImage(index: number) {
    this.currentIndex = index;
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al primer elemento al llegar al final
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Vuelve al último elemento al llegar al principio
    }
  }
}
