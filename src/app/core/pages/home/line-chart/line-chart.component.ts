import { Component, OnInit } from '@angular/core';
import { LineEchartService } from '../../../../shared';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  option_chart: any;
  config: any;

  constructor(private _LineEchartService: LineEchartService) { }

  ngOnInit() {
    this.option_chart = this.getLineChart();
  }

  getLineChart() {
    this.config = {
      title: {subtext: '单位：人/千'},
      xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      data: [
        {
          name: '移动端',
          data: [10, 12, 21, 54, 260, 830, 710]
        },
        {
          name: 'PC端',
          data: [1320, 1132, 601, 234, 120, 90, 20]
        }
      ]
    };
    return this._LineEchartService.makeLineChart(this.config);
  }

}
