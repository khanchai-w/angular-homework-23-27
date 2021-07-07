import { BackendService } from './../../backend.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=[];
  constructor(
    private router: Router,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.skills = this.backendService.getSkill();
  }

}
