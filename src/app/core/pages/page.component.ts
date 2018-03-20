import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../states/reducers';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import * as FailResponseAction from '../states/actions/fail.action';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  mySubscription: Subscription = new Subscription();

  constructor(private _store: Store<fromRoot.State>, private _notification: NzNotificationService) {
    this.mySubscription.add(
      this._store.select(fromRoot.geterrorCode).subscribe((error) => {
        if (error) {
          this._notification.error('操作失败', '不能连接到服务器');
        }
      }
      )
    );
  }

  ngOnInit() {
  }

}
