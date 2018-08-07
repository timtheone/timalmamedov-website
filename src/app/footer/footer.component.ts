import { ScrollService } from './../scroll.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ScrollService]
})
export class FooterComponent implements OnInit {

  constructor(public scroller: ScrollService) { }

  ngOnInit() {
    $('#back-to-top').fadeOut(0);
      $(window).scroll(function() {
        let offsetVal = $('.chart-wrapper:eq(0)').offset().top
        if ($(this).scrollTop() > offsetVal) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
      });
  }
  

}
