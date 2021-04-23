import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  hidden: boolean = false;
  fullScreen: boolean = true;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  }
  userType : 'admin' | 'user' = 'user'; 
  selectedIndex: number = 0;
  params: any = null;
  constructor(private router: Router, private api: ApiServiceService, private routeInfo: ActivatedRoute) { }
  ngAfterViewInit(): void {
      if(this.routeInfo.snapshot.params){
        this.params = this.routeInfo.snapshot.params;
        if(this.params){
          let index = this.params.tabIndex;
          if(index>0 && index < 3) this.selectedIndex = index
        }
      }
  }
  /**
   *添加实验室
   *
   * @memberof HomeComponent
   */
  addLaboratory() {
    console.log('xxxx')
    this.router.navigateByUrl('/laboratory-home/add-laboratory')
  }
  addNews() {
    this.router.navigateByUrl('/news-home/add-news')
  }
  /**
   *添加设配
   *
   * @memberof HomeComponent
   */
   addEquipment() {
    console.log('xxxx')
    this.router.navigateByUrl('/equipment-home/add-equipment')
  }
  ngOnInit(): void {
    this.userType = this.api.getUserType();
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
  
}
