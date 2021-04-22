import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-appointment-laboratory',
  templateUrl: './appointment-laboratory.component.html',
  styleUrls: ['./appointment-laboratory.component.scss']
})
export class AppointmentLaboratoryComponent implements OnInit {
  amorpm = '0';
  day = new Date();
  name = '选择';
  amorpmData= [
    { name: '上午', value: '0'} ,
    { name: '下午', value: '1'} ,
  ]
  laboratoryData: any = null;
  constructor(private router: Router, private routerInfo: ActivatedRoute, private api: ApiServiceService) { }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
  ngOnInit(): void {
    if(this.routerInfo.snapshot.params){
      this.laboratoryData = this.routerInfo.snapshot.params;
    }
  }
  appointmentLaboratory() {
    const me = this;
    let parmas = {
      "amorpm": Number(me.amorpm),
      "day": Number(me.currentDateFormat(this.day, 'yyyymmdd')),
      // "id": me.laboratoryData.id,
      "labId":  me.laboratoryData.id,
      "status": 1,
    }
    me.api.appointmentLaboratory([parmas]).subscribe(data=>{
      let dataN: any = data;
      if(dataN.code == 0) {
        me.onLeftClick();
      }
    })
  }
  currentDateFormat(date: any, format: string = 'yyyy-mm-dd HH:MM'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('MM', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  }
  onOk(result: Date) {
    this.name = this.currentDateFormat(result, 'yyyy-mm-dd');
    this.day = result;
  }
}
