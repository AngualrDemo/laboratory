import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selectedIndex: number = 0;

  constructor(private router: Router) { }
  ngAfterViewInit(): void {
      console.log(document.body.offsetHeight)
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
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }

}
