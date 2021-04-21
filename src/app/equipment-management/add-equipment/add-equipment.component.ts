import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
}
