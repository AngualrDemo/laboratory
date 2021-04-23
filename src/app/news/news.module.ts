import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-news',
    component: NewsAddComponent
  }
]

@NgModule({
  declarations: [NewsAddComponent],
  imports: [
    RouterModule.forChild(routes), 
     NgZorroAntdMobileModule, CommonModule, FormsModule
  ]
})
export class NewsModule { }
