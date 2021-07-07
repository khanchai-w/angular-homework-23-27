import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutMeComponent } from './portfolio/about-me/about-me.component';
import { ContactMeComponent } from './portfolio/contact-me/contact-me.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
