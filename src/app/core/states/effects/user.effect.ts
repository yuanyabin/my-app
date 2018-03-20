import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { UserService } from '../services';
import * as UserActions from '../actions/user.action';
import * as FailActions from '../actions/fail.action';
// import * as FailAction from ''

@Injectable()

export class UserEffects {
    @Effect()
    getUserList$: Observable<Action> = this._actions$.ofType(UserActions.GET_USER_LIST).startWith(new
        UserActions.GetUserListAction()).map(toPayload)
    .switchMap(data => {
        debugger;
        return this._service.getUserList().map(res => new UserActions.GetUserListActionSuccess
            (res)).catch(res => of(new FailActions.FailResponseAction()));
    });

    constructor(private _service: UserService, private _actions$: Actions) {}
}
