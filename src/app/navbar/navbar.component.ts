import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from './../scroll.service';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ScrollService]
})
export class NavbarComponent implements OnInit {
  routeState:boolean = false;
  constructor(private router: Router, public scroller: ScrollService) {
  }
  
  ngOnInit() {
    if (this.router.url !== '/') {
      this.routeState = true;
    } 
  }
}
