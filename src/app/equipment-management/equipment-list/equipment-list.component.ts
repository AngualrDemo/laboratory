import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetService } from 'ng-zorro-antd-mobile';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  pageLimit = 20;
  public directionCount = 0;
  page = 1;
  state: any = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 500,
    data: [],
    directionName: 'both up and down'
  };
  userType : 'admin' | 'user' = 'user'; 
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  constructor(private router: Router, private api: ApiServiceService, private _actionSheet: ActionSheetService) {}

  onClick() {
    this.directionCount++;
    switch (this.directionCount) {
      case 0:
        this.state.direction = '';
        this.state.directionName = 'both up and down';
        break;
      case 1:
        this.state.direction = 'down';
        this.state.endReachedRefresh = true;
        this.state.directionName = 'down';
        break;
      case 2:
        this.state.direction = 'up';
        this.state.directionName = 'up';
        break;
      default:
        this.directionCount = 0;
        this.state.direction = '';
        this.state.directionName = 'both up and down';
        break;
    }
  }
  onClickItem(data: any) {
    const me = this;
    me.router.navigate(['/laboratory-home/laboratory-detail', data])
  }
  actionSheet(itemData:any):void {
      if(this.userType == 'admin'){
        this.AdminShowActionSheet(itemData)
      }else {
        this.userShowActionSheet(itemData)
      }
  }
  AdminShowActionSheet = (itemData: any) => {
    const BUTTONS = [' 详 情 ', ' 删  除', ' 取 消 '];
    const me = this;
    const FUNC = ['goEquipment', 'deleteItem']
    this._actionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        title: itemData.labName,
        maskClosable: true
      },
      buttonIndex => {
        console.log(buttonIndex);
        let funName = FUNC[buttonIndex] as 'goEquipment'|'deleteItem';
        if(buttonIndex != BUTTONS.length-1 && buttonIndex != -1) me[funName](itemData)
      }
    );
  }
  userShowActionSheet = (itemData: any) => {
    const BUTTONS = [' 预 约 ', ' 报 修 ', ' 取 消 '];
    const FUNC = ['appointmentLaboratory','repairLaboratory'];
    const me = this;
    this._actionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        title: itemData.labName,
        maskClosable: true
      },
      buttonIndex => {
        let funName = FUNC[buttonIndex] as 'appointmentLaboratory'|'repairLaboratory';
        if(buttonIndex != BUTTONS.length-1 && buttonIndex != -1) me[funName](itemData)
        
      }
    );
  }
  pullToRefresh(event: any) {
    console.log(event)
    if (event === 'endReachedRefresh') {
      if (this.page < 9) {
        this.page++;
        // this.addItems(this.page * this.pageLimit);
        this.state.refreshState.currentState = 'release';
        setTimeout(() => {
          this.state.refreshState.currentState = 'finish';
        }, 1000);
      }
    } else {
      if (event === 'down') {
        this.state.data = [];
        this.page = 1;
        this.getDataList();
      } else {
        this.page++;
        this.getDataList();
      }
    }
  }
  goEquipment(itemData:any){
    this.router.navigate(['/equipment-home/add-equipment', itemData])
  }
  deleteItem(itemDate:any) {
    console.log(itemDate, 'deleteItem')
    const me = this;
    this.api.deleteLaboratory(itemDate.id).subscribe(data=>{
      let dataN: any = data;
      if(dataN.code==0) {
        this.state.data = [];
        me.getDataList();
      }
    })
  }
   /**
   *预约
   *
   * @memberof HomeComponent
   */
   appointmentLaboratory(itemData:any) {
    this.router.navigate(['/laboratory-home/appointment-laboratory', itemData])
  }
  repairLaboratory(itemData:any) {
    this.router.navigate(['/laboratory-home/repair-laboratory', itemData])
  }
  // addItems(startIndex:number) {
  //   for (let i = startIndex; i < this.pageLimit * (this.page + 1); i++) {
  //     this.state.data.push(i);
  //   }
  // }
  getDataList() {
    const me = this;
    let params = {"page":{
          current: me.page,
          size: me.pageLimit
      },
        "t":{} 
    }
    me.api.getEquipmentList(params).subscribe(data=>{
      let dataN: any = data;
      if(dataN.code == '0' && dataN.data && Array.isArray(dataN.data.records)) {
        this.state.data = [...this.state.data, ...dataN.data.records]
      }
    })
  }
  ngOnInit() {
    this.userType = this.api.getUserType();
    this.getDataList();
  }
  

}
