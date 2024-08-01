import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['October','November','December' ], 
	       datasets: [
          {
            label: "Billable Hours",
            data: ['153','148','116'],
            backgroundColor: '#a3cae9',
            barPercentage: 0.5, // Adjust bar width
            categoryPercentage: 0.5 // Adjust bar width
          },
          {
            label: "Non Billable",
            data: ['5','10','5'],
            backgroundColor: '#d4d9de',
            barPercentage: 0.5, // Adjust bar width
            categoryPercentage: 0.5 // Adjust bar width
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          x: {
            grid: {
              display: false // Remove x-axis grid lines
            }
          },
          y: {
            grid: {
              display: false // Remove y-axis grid lines
            }
          }
        
      }
    }
      
    });
  }
}
