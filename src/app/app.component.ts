import { Component,OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ng-scrollreveal';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(config: NgsRevealConfig, private titleService: Title) {
    config.reset = false;
  }
  ngOnInit() {
    // this.titleService.setTitle('test');
    // let test = this.titleService.getTitle();
    // console.log(test);
  }
}
