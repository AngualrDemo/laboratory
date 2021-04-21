import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = null;
  password = null;
  isShowNoticeBar = false;
  errorMsg = { 
    content: '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
    font: '14px' 
  }
  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin() {
      const me = this;
      let params = {
        passWord: this.password,
        userName:  this.userName
      }
      console.log(params)
      this.api.login(params).subscribe(data=>{
        const dataN: any = data;
        if(dataN.code == '0') {
          me.router.navigateByUrl('/home')
          me.isShowNoticeBar = false;
        }else {
          me.isShowNoticeBar = true;
          me.errorMsg.content = dataN.msg;
        }
        console.log(data)
      })
  }
}
