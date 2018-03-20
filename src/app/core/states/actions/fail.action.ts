import { Action } from '@ngrx/store';
// import * as FailModel from '../models/fail.model';

export const FAIL_RESPONSE = '[Fail] Fail';

// 任意error_code的事件都由它来处理
export class FailResponseAction implements Action {
  readonly type = FAIL_RESPONSE;
  constructor() {}
}

export type Actions = FailResponseAction;
