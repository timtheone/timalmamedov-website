import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }

  scrollTo(id,speed: Number) {
    $.extend( $.easing,
      {
      easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
      }
    })

    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${id}`).offset().top
    }, speed, 'easeOutBack');
  }
}
