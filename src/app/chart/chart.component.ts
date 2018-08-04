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

    let gradientVerticalStrokeHover = ctx.createLinearGradient(0, 0, 0, 500);
    gradientVerticalStrokeHover.addColorStop(0, "rgba(129, 60, 255,0.6)");
    gradientVerticalStrokeHover.addColorStop(1, "rgba(132, 225, 252, 0.6)");
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
                hoverBackgroundColor: [
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover,
                  gradientVerticalStrokeHover
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
              duration: 2000
            },
            layout: {
              padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
                }
            },
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
    let gradientHorizontalStroke = ctx.createLinearGradient(0, 0, 750, 0);
    gradientHorizontalStroke.addColorStop(0, "#84E1FC");
    gradientHorizontalStroke.addColorStop(1, "#813CFF");

    let gradientHorizontalStrokeHover = ctx.createLinearGradient(0, 0, 750, 0);
    gradientHorizontalStrokeHover.addColorStop(0, "rgba(132, 225, 252, 0.8)");
    gradientHorizontalStrokeHover.addColorStop(1, "rgba(129, 60, 255,0.8)");
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
              hoverBackgroundColor: [
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover,
                gradientHorizontalStrokeHover
              ],§
              borderWidth: 1§
          }]§
      },§
      options: {§
          animation: {§
            duration: 2000
          },
          layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
              }
          },
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
                  min:0,
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
