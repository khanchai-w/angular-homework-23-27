import { BackendService } from './../../backend.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  about = [];
  constructor(
    private router: Router,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.about = this.backendService.getAboutMe();
  }

}
