import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-laboratory-detail',
  templateUrl: './laboratory-detail.component.html',
  styleUrls: ['./laboratory-detail.component.scss']
})
export class LaboratoryDetailComponent implements OnInit {

  constructor(private router: Router, private routerInfo: ActivatedRoute, private api : ApiServiceService) { }
  laboratoryData: any = null;
  pageType: 'edit' | 'detail' = 'detail'
  labIntroduce = '';
  appointmentList: Array<any> = [];
  labName = '';
  ngOnInit(): void {
    if(this.routerInfo.snapshot.params){
      this.laboratoryData = this.routerInfo.snapshot.params;
      this.labIntroduce  = this.laboratoryData.labIntroduce
      this.labName  = this.laboratoryData.labName
      this.getLaboratoryAppointmentList();
    }
    
  }
  onLeftClick(): void {
    this.router.navigateByUrl('/home');
  }
  editLaboratory(): void{
    const me = this;
    me.pageType = me.pageType == 'edit' ? 'detail' : 'edit'
  }
  saveLaboratory():void{
    console.log('saveLaboratory')
    const me = this;
    let params = {
      labIntroduce: me.labIntroduce,
      labName: me.labName,
      id: me.laboratoryData.id
    }
    me.api.editLaboratory(params).subscribe(data=>{
      let dataN: any = data;
      if(dataN.code == 0) {
        me.onLeftClick();
      }
    })
  }
  renderHeader() {
    return '实验室详情'
  }
  getLaboratoryAppointmentList() {
    const me = this;
    me.api.queryStarteByLabNmae(this.laboratoryData.id).subscribe(data=>{
      let dataN: any = data;
      console.log(data)
      if(dataN.code == '0' && Array.isArray(dataN.data)) {
        me.appointmentList = dataN.data;
      }else {
        me.appointmentList = [];
      }
    })
  }
}
