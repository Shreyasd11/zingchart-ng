import { Component } from '@angular/core';
import customers from './customers.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  customers = customers;

  websiteTraffic: zingchart.graphset = {
    type: 'line',
    series: [{
      values: [500, 300, 400, 500, 200, 200, 300]
    }],
  };

  allocatedBudget: zingchart.graphset = {
    type: 'gauge',
    alpha: 1,
    'background-color': '#fff',
    plot: {
      'background-color': '#be314b',
    },
    plotarea: {
      margin: '30 0 0 0'
    },
    scale: {
      'size-factor': 1
    },
    'scale-r': {
      tick: {
        'line-color': "none",
      },

      values: '0:100:10',


      center: {  //Pivot Point
        size: 5,
        'background-color': "white",
        'border-color': "b"
      },
      item: {
        'font-size': 12,
        // 'offsetX': -4,
        'font-color': '#777'

      },
      ring: {
        size: 10,
        'background-color': "blue"
      }
    },

    tooltip: {
      'background-color': 'black'
    },
    series: [
      {
        values: [70],
        animation: {
          speed: 2500
        }
      }
    ]
  };
}
