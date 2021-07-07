import { Router } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent,
    ContactMeComponent,
    SkillsComponent
  ]
})
export class PortfolioModule {

  constructor(
    private router: Router
  ){}
}
