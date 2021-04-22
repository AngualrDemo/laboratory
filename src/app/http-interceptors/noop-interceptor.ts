import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const ignoreToken = ['login', 'logout', 'table'];
@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiPath = environment.apiPath
    // 先补全请求协议
    let url =  apiPath +  req.url;
    // let reqNew = req.clone({
    //     url,
    //     headers: req.headers.set('token', 'asdqwe')
    //     // withCredentials: true,
    //     // Authorization: window.sessionStorage.getItem('token') as string
    // });

    const needToken = ignoreToken.filter(u => url.match(u));
    // if (url.indexOf('http://') < 0 || url.indexOf('https://') < 0) {
    //   url = 'http://' + url;
    // }
    // 过滤掉不需要token的请求
    if (!needToken.length) {
      req = req.clone({
        url,
        // withCredentials: true,
        headers: req.headers.set('Authorization', window.sessionStorage.getItem('token') as string)
      });
    } else {
      req = req.clone({
        url
      });
    }
    // reqNew.headers = reqNew.headers.set('Authorization',window.sessionStorage.getItem('token') as string)
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log(event);
            if (event.status >= 500) {
              // 跳转错误页面
            }if (event.status >= 500) {
                // 跳转错误页面
            }
          }
        },
        error => {
          // token过期 服务器错误等处理
        })
    );
  }
}