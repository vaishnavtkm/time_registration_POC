import { Component } from '@angular/core';
import { BarChartComponent } from '../../bar-chart/bar-chart.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
