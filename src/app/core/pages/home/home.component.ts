import { Component, OnInit } from '@angular/core';
// import { Subscription, Observable } from 'rxjs';
// import { Store } from '@ngrx/store';

// import { UserService } from '../../states/services/user.service';
// import * as UserActions from '../../states/actions/user.action';
// import * as UserReducer from '../../states/reducers/user.reducer';
// import * as UserModel from '../../states/models/user.model';

import { PipEchartService, LineEchartService } from '../../../shared';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // mySubscription: Subscription = new Subscription();
  option_chart_pip: any;

  // 定义变量保存假数据，以后可以用后端真实得到的数据代替
  chartConfigData1: any;

  constructor(private _PipEchartService: PipEchartService) { }

  ngOnInit() {
    this.makeFirstBlockChart();
  }

  makeFirstBlockChart() {
    this.chartConfigData1 = {
      color: ['#216f99', '#208ecf', '#28b2d8', '#3a74d9', '#89b0bb'],
      data: [{ value: 152, name: '搜索引擎' }, { value: 360, name: '直接访问' }, { value: '500', name: '邮件营销' }, { value: 543, name: '联盟广告' },
      { value: 84, name: '视频广告' }]
    };

    this.option_chart_pip = this.getPipeChart(this.chartConfigData1);


    // this.option_chart_3 = this.getMapChart();
  }

  getPipeChart(config) {
    return this._PipEchartService.makeChart(config);
  }

}
