import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let canvas = <HTMLCanvasElement> document.getElementById('myChart');
    let ctx = canvas.getContext("2d");
    let gradientVerticalStroke = ctx.createLinearGradient(0, 0, 0, 500);
    gradientVerticalStroke.addColorStop(0, "#813CFF");
    gradientVerticalStroke.addColorStop(1, "#84E1FC");
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["HTML", "CSS(SCSS)", "Javascript(ES6)", "jQuery", "Angular2+", "PHP","MySQL","Symfony","Ruby/Rails"],
            datasets: [{
                label: 'Technical Skills',
                data: [78, 74, 62, 65, 28, 40, 45, 22, 38],
                backgroundColor: [
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke,
                    gradientVerticalStroke
                ],
                borderColor: [
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke,
                  gradientVerticalStroke
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
                xAxes: [{
                  autoSkip: false,
                  barThickness: 40,
                  gridLines: {
                    // color: "rgba(0, 0, 0, 0)",
                    display: false
                  }
                }],
                yAxes: [{ 
                  ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 20,              
                    callback: function(label, index, labels) {
                      switch (label) {
                          case 0:
                              return 'Can you spell that out for me ?';
                          case 20:
                              return 'Grasped the Basics ';
                          case 40:
                              return 'Know my way around';
                          case 60:
                              return 'Pretty good';
                          case 80:
                              return 'Smokin\'';
                          case 100:
                              return 'GURU';
                      }
                  }
                }
                }]
            }
        }
    });

    // HORIZONTAL CHART



    let canvasH = <HTMLCanvasElement> document.getElementById('chartH');
    let ctxH = canvasH.getContext("2d");
    let gradientHorizontalStroke = ctx.createLinearGradient(0, 0, 400, 0);
    gradientHorizontalStroke.addColorStop(0, "#84E1FC");
    gradientHorizontalStroke.addColorStop(1, "#813CFF");
    let chartH = new Chart(ctxH, {
      type: 'horizontalBar',
      data: {
          labels: ["HTML", "CSS(SCSS)", "Javascript(ES6)", "jQuery", "Angular2+", "PHP","MySQL","Symfony","Ruby/Rails"],
          datasets: [{
              label: 'Technical Skills',
              data: [78, 74, 62, 65, 28, 40, 45, 22, 38],
              backgroundColor: [
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke,
                  gradientHorizontalStroke
              ],
              borderColor: [
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke,
                gradientHorizontalStroke
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
              yAxes: [{
                gridLines: {                  
                  display: false
                }
              }],
              xAxes: [{
                ticks: {
                  max: 100,
                  stepSize: 20,
                  autoSkip: false,
                  callback: function(label, index, labels) {
                    switch (label) {
                        case 0:
                            return 'Can you spell that out for me ?';
                        case 20:
                            return 'Grasped the Basics ';
                        case 40:
                            return 'Know my way around';
                        case 60:
                            return 'Pretty good';
                        case 80:
                            return 'Smokin\'';
                        case 100:
                            return 'GURU';
                    }
                  }
                }
              }]
          }
      }
  });
  }

}
