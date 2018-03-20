import { Action } from '@ngrx/store';

export const NOTIFICATION = '[Notification] Notification';

export class NotificationAction implements Action {
  readonly type = NOTIFICATION;
  constructor() { }
}

export type Actions
  = NotificationAction;
