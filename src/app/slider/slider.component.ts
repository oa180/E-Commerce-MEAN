import { Component, AfterViewInit } from '@angular/core';
import { Carousel } from 'flowbite';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {}

// export class SliderComponent implements OnInit {
//   ngOnInit(): void {
//     this.slider();
//   }

//   slider() {
//     const slides = document.getElementsByClassName('slider-item');
//     let currentIndex = 0;

//     const slideInterval = setInterval(() => {
//       slides[currentIndex].classList.add('-translate-x-1/2');
//       setTimeout(() => {
//         slides[currentIndex].classList.add('hidden');
//       }, 500);

//       currentIndex = (currentIndex + 1) % slides.length;
//       slides[currentIndex].classList.remove('hidden');
//       slides[currentIndex].classList.remove('translate-x-1/2');
//     }, 2000);
//   }
// }
