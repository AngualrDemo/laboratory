import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-laboratory-list',
  templateUrl: './laboratory-list.component.html',
  styleUrls: ['./laboratory-list.component.scss']
})
export class LaboratoryListComponent implements OnInit {
  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  pageLimit = 20;
  public directionCount = 0;
  page = 0;
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 500,
    data: [1],
    directionName: 'both up and down'
  };
 
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  constructor(private router: Router, private api: ApiServiceService) {}

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
    console.log(data);
    this.router.navigateByUrl('/laboratory-home/laboratory-detail')
  }
  
  pullToRefresh(event: any) {
    if (event === 'endReachedRefresh') {
      if (this.page < 9) {
        this.page++;
        this.addItems(this.page * this.pageLimit);
        this.state.refreshState.currentState = 'release';
        setTimeout(() => {
          this.state.refreshState.currentState = 'finish';
        }, 1000);
      }
    } else {
      if (event === 'down') {
        this.state.data = [];
        this.page = 0;
        this.addItems(0);
      } else {
        if (this.page < 9) {
          this.page++;
          this.addItems(this.page * this.pageLimit);
        }
      }
    }
  }

  addItems(startIndex:number) {
    for (let i = startIndex; i < this.pageLimit * (this.page + 1); i++) {
      this.state.data.push(i);
    }
  }
  getDataList() {
    const me = this;
    let params = {"page":{
          pages: 0,
          current: 1,
          size: 2
      },
        "t":{}
        
    }
    me.api.getLaboratoryList(params).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit() {
    this.addItems(0);
    this.getDataList();
  }
  
}
