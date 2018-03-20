import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { NzNotificationService } from 'ng-zorro-antd';


import * as GetUsersAction from '../actions/user.action';
import { NotificationAction } from '../actions/notification.action';

@Injectable()

export class RequirestEffects {
    option: string[] = [
        GetUsersAction.GET_USER_LIST_SUCCESS
    ];

    @Effect()
    log: Observable<Action> = this._actions$.ofType(...this.option).switchMap(() => {
        this._notification.success('操作成功', '');
        return Observable.of(0).map(() => new NotificationAction());
    });

    constructor(
        private _actions$: Actions,
        private _notification: NzNotificationService,
    ) { }
}
