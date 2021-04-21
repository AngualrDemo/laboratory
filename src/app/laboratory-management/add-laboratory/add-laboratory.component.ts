import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddLaboratory, ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.scss']
})
export class AddLaboratoryComponent implements OnInit {

  constructor(private router: Router, private api: ApiServiceService) { }
  labIntroduce = '';
  labName = '';
  ngOnInit(): void {
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
  addLaboratory() {
    let params: AddLaboratory = {
      labIntroduce: this.labIntroduce,
      labName: this.labName
    }
    this.api.addLaboratory(params).subscribe(data=>{
      console.log(data)
    })
  }
}
