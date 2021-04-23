import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {
  equName = '';
  equIntroduction = '';
  queType = '';
  laboratoryData: any= null;
  constructor(private router: Router, private routerInfo: ActivatedRoute, private api: ApiServiceService) { }

  ngOnInit(): void {
    if(this.routerInfo.snapshot.params){
      this.laboratoryData = this.routerInfo.snapshot.params;
      this.equName = this.laboratoryData.equName;
      this.equIntroduction = this.laboratoryData.equIntroduction;
      this.queType = this.laboratoryData.queType;
    }
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
  addEquipment() {
    const me = this;
    let params = {
      equIntroduction: this.equIntroduction,
      equName: this.equName,
      id: '',
      queType: this.queType
    }

    if(me.laboratoryData) {
      params['id'] = me.laboratoryData.id;
      this.api.updateEquipment(params).subscribe(data=>{
        let dataN:any = data;
        if(dataN.code == '0') {
         me.onLeftClick()
        }
        console.log(data)
      })
    }else {
      this.api.addEquipment(params).subscribe(data=>{
        let dataN:any = data;
        if(dataN.code == '0') {
         me.onLeftClick()
        }
        console.log(data)
      })
    }
   
  }
}
