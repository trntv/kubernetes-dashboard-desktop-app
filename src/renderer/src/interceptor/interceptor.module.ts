import {Injectable} from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ElectronBaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned = req.clone()
    if (req.url.startsWith('api') || req.url.startsWith('config')) {
      cloned = req.clone({
        url: "http://127.0.0.1:9090/" + req.url
      })
    }

    return next.handle(cloned)
  }
}
