import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dayview',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers: [],

  templateUrl: './dayview.component.html',
  styleUrl: './dayview.component.scss',
})
export class DayviewComponent {
  
}
