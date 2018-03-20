import { Injectable } from '@angular/core';
import { Headers, Response, Request } from '@angular/http';
import { NzNotificationService } from 'ng-zorro-antd';

import { API } from '../../../api.service';
import { HttpClient } from './custom-http.service';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class UserService {
    constructor(private _api: API, private _http: HttpClient, private _NzNotificationService: NzNotificationService) {}

    getUserList(data?): Observable<any> {
        const userListUrl = this._api.getUserList();
        return this._http.get(userListUrl, data)
        .map(res => this._http.filterRes(res));
    }
}
