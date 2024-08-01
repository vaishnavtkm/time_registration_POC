import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-carousel',
  standalone: true,
  imports: [],
  templateUrl: './day-carousel.component.html',
  styleUrl: './day-carousel.component.scss',
})
export class DayCarouselComponent {
  @Input() days: number[] = [];
  currentDay: number;

  constructor() {
    this.currentDay = this.days[0];
  }

  prev() {
    const currentIndex = this.days.indexOf(this.currentDay);
    this.currentDay =
      this.days[(currentIndex - 1 + this.days.length) % this.days.length];
  }

  next() {
    const currentIndex = this.days.indexOf(this.currentDay);
    this.currentDay = this.days[(currentIndex + 1) % this.days.length];
  }
}
