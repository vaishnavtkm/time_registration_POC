import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DayCarouselComponent } from '../../subcomponents/day-carousel/day-carousel.component';
@Component({
  selector: 'app-monthview',
  standalone: true,
  imports: [RouterLink,DayCarouselComponent],
  templateUrl: './monthview.component.html',
  styleUrl: './monthview.component.scss'
})
export class MonthviewComponent {

}
