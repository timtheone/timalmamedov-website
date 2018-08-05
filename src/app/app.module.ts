import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BioComponent } from './bio/bio.component';
import { ChartComponent } from './chart/chart.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NgsRevealModule} from 'ng-scrollreveal';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '**', component: NotFoundComponentComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BioComponent,
    ChartComponent,
    PortfolioComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }