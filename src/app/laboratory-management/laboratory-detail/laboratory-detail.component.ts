import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-detail',
  templateUrl: './laboratory-detail.component.html',
  styleUrls: ['./laboratory-detail.component.scss']
})
export class LaboratoryDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
}
