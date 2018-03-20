import { Action } from '@ngrx/store';
import * as userModel from '../models/user.model';

export const GET_USER_LIST = '[User] Get User List';
export const GET_USER_LIST_SUCCESS = '[User] Get User List Success';

export class GetUserListAction implements Action {
    readonly type = GET_USER_LIST;
    constructor() {}
}

export class GetUserListActionSuccess implements Action {
    readonly type = GET_USER_LIST_SUCCESS;
    constructor(public payload: userModel.User) {}
}

export type Actions
    = GetUserListAction
    | GetUserListActionSuccess;
