import { Component, OnInit } from '@angular/core';
import { PipEchartService } from '../../../shared/service-shared';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  option: any;
  chartConfigData: any;

  constructor(private _PipEchartService: PipEchartService) { }

  ngOnInit() {
    this.chartConfigData = {color: ['#278ccf', '#4d8cad'], data: [{value: 30, name: '新增用户'}, {value: 70, name: '老用户'}],
    title: {text: '网站访问量'}};
    this.option = this.getChart(this.chartConfigData);
  }

  getChart(config) {
    return this._PipEchartService.makeChart(config);
  }
}
