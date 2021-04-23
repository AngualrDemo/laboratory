import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {

  content = '';
  title = '';
  label = '';
  newsData: any= null;
  constructor(private router: Router, private routerInfo: ActivatedRoute, private api: ApiServiceService) { }

  ngOnInit(): void {
    if(this.routerInfo.snapshot.params){
      this.newsData = this.routerInfo.snapshot.params;
      this.content = this.newsData.content;
      this.title = this.newsData.title;
      this.label = this.newsData.label;
    }
  }
  onLeftClick(): void {
    this.router.navigate(['/home', {tabIndex: 2}])
  }
  addNews() {
    const me = this;
    let params:any = {
      content: this.content,
      title: this.title,
      label: this.label
    }
    if(me.newsData) {
      params['id'] = me.newsData.id;
      this.api.updateNews(params).subscribe(data=>{
        let dataN:any = data;
        if(dataN.code == '0') {
         me.onLeftClick()
        }
        console.log(data)
      })
    }else {
      this.api.addNews(params).subscribe(data=>{
        let dataN:any = data;
        if(dataN.code == '0') {
         me.onLeftClick()
        }
        console.log(data)
      })
    }
   
  }

}
