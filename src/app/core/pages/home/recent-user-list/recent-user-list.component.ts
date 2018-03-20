import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as UserActions from '../../../states/actions/user.action';
import * as UserReducer from '../../../states/reducers/user.reducer';
import * as UserModel from '../../../states/models/user.model';

@Component({
  selector: 'app-recent-user-list',
  templateUrl: './recent-user-list.component.html',
  styleUrls: ['./recent-user-list.component.css']
})
export class RecentUserListComponent implements OnInit {
  UserLists: any;
  isVisible = false;
  dialogText: string; // 定义删除弹窗显示的名字信息
  mySubscription: Subscription = new Subscription();

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    // 发送数据请求，这个函数在整个应用中执行一次即可，其他地方可以绕过此步骤
    // this._store.dispatch(new UserActions.GetUserListAction());
    // 将订阅保存在mySubscription变量中，以便组件销毁的时候取消订阅
    this.mySubscription.add(
      this._store.select(UserReducer.getUserList).subscribe(userList => {
        if (userList) {
            this.UserLists = userList.user.data;
        }
      })
    );
  }

  deleteUser(id, name) {
    this.dialogText = name;
    this.isVisible = true; // 控制弹窗显示的变量
  }

  handleOk = (e) => {
    // 执行删除操作，向后端提交信息
    this.isVisible = false;
  }

  handleCancel = (e) => {
    // 取消删除操作
    this.isVisible = false;
  }

}
