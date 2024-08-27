import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dayview',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers: [],

  templateUrl: './dayview.component.html',
  styleUrl: './dayview.component.scss',
})
export class DayviewComponent {}
