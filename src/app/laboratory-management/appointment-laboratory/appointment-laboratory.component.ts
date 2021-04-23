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
  day = '';
  status = 0;
  name = '选择';
  amorpmData= [
    { name: '上午', value: '0'} ,
    { name: '下午', value: '1'} ,
  ]
  laboratoryData: any = null;
  data: Array<any> = [];
  initData: Array<any> = [];
  columnNum = 3;
  constructor(private router: Router, private routerInfo: ActivatedRoute, private api: ApiServiceService) { }
  onLeftClick(): void {
    this.router.navigateByUrl('/home')
  }
  ngOnInit(): void {
    if(this.routerInfo.snapshot.params){
      this.laboratoryData = this.routerInfo.snapshot.params;
      this.getLaboratoryAppointmentList();
    }
  }
  getLaboratoryAppointmentList() {
    const me = this;
    me.api.getLaboratoryAppointmentList(this.laboratoryData.id).subscribe(data=>{
      let dataN: any = data;
      console.log(data)
      if(dataN.code == '0' && Array.isArray(dataN.data)) {
        let dataArr = dataN.data.map((item: any)=>{
          item.text = item.day 
          return item
        });
        const dataLength = (dataArr && dataArr.length) || 0;
        let rowCount = Math.ceil(dataLength / 3);
        me.data = dataArr;
        console.log(me.data)
        me.initData = me.getRows(rowCount, dataLength, dataArr);
      }else {
        me.data = [];
      }
    })
  }
  getRows(rowCount: number, dataLength: number, dataArr: Array<any>) {
    const columnNum = 3;
    const rowArr = new Array();
    for (let i = 0; i < rowCount; i++) {
      rowArr[i] = new Array();
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          rowArr[i][j] = this.data[dataIndex];
        } else {
          rowArr[i][j] = null;
        }
      }
    }
    return rowArr;
  }
  appointmentLaboratory() {
    const me = this;
    let parmas = {
      "amorpm": Number(me.amorpm),
      "day": this.day,
      // "id": me.laboratoryData.id,
      "labId":  me.laboratoryData.id,
      "status": 1,
    }
    me.api.appointmentLaboratory(parmas).subscribe(data=>{
      let dataN: any = data;
      if(dataN.code == 0) {
        me.onLeftClick();
      }
    })
  }
  
  click(event: any, i:any) {
    const me = this;
    if(event.status ==0) {
      me.day = event.day;
      me.amorpm = String(event.amorpm)
      me.status= event.status;
      console.log(event);
    }else {
      // TODO 提示 预约过的不允许在预约
    }
   
  }
  
}
