import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddLaboratory, ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-laboratory-repair',
  templateUrl: './add-laboratory-repair.component.html',
  styleUrls: ['./add-laboratory-repair.component.scss']
})
export class AddLaboratoryRepairComponent implements OnInit {
  constructor(private router: Router, private api: ApiServiceService) { }
  dic = '';
  labName = '';
  ngOnInit(): void {
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
  addLaboratory() {
    const me = this;
    let params = {
      dic: this.dic,
      labName: this.labName
    }
    this.api.addRepairLaboratory(params).subscribe(data=>{
      let dataN:any = data;
      if(dataN.code == '0') {
       me.onLeftClick()
      }
      console.log(data)
    })
  }
  
  
}
