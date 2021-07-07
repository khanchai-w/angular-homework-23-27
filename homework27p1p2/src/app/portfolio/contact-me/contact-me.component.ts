import { BackendService } from './../../backend.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contact=[];
  constructor(
    private router: Router,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.contact = this.backendService.getContactMe();
  }

}
