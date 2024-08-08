import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-carousel',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './day-carousel.component.html',
  styleUrl: './day-carousel.component.scss',
})
export class DayCarouselComponent {
  @Input() dates: Date[] = [];
  currentDate: Date;

  constructor() {
    this.currentDate = this.dates[0];
  }

  prev() {
    const currentIndex = this.dates.indexOf(this.currentDate);
    this.currentDate =
      this.dates[(currentIndex - 1 + this.dates.length) % this.dates.length];
  }

  next() {
    const currentIndex = this.dates.indexOf(this.currentDate);
    this.currentDate = this.dates[(currentIndex + 1) % this.dates.length];
  }
}
