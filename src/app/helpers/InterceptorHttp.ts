import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InterceptorHttp {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let insertId = req.clone({
            headers: req.headers.set('app-id','64ed062d4340d2b2d45be2db')
        })
        return next.handle(insertId);
    }
}
