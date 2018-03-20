import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

// 再次封装http功能，加入token验证
export class HttpClient {
    constructor(private _http: Http, private _router: Router) { }

    createRequestHeader(headers: Headers) {
        const token = JSON.parse(localStorage.getItem('currentUser')).token;
        let normalId = '1';

        if (localStorage.getItem('currentNormalUser')) {
            normalId = JSON.parse(localStorage.getItem('currentNormalUser')).id;
        }

        if (token) {
            headers.append('X-Auth-Token', token);
            headers.append('X-Normal-Id', normalId);
        } else {
            this._router.navigate(['/login']);
        }
    }

    get(url, data?): Observable<Response> {
        const headers = new Headers();
        this.createRequestHeader(headers);
        return this._http.get(url, { headers: headers });
    }

    post(url, data): Observable<Response> {
        const headers = new Headers();
        this.createRequestHeader(headers);
        return this._http.post(url, data, { headers: headers });
    }

    put(url, data): Observable<Response> {
        const headers = new Headers();
        this.createRequestHeader(headers);
        return this._http.put(url, data, { headers: headers });
    }

    delete(url): Observable<Response> {
        const headers = new Headers();
        this.createRequestHeader(headers);
        return this._http.delete(url, { headers: headers });
    }

    // 当后端RESTFUL返回大于299，则认为是异常
    filterRes(res: Response): Observable<Response> {
        if (res.ok) {
            return res.json();
        } else {
            throw Error(res.json());
        }
    }
}
