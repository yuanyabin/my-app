import { Injectable } from '@angular/core';

@Injectable()

export class LineEchartService {
    constructor() { }
    // title: string;
    // unit: string;
    // dataType: any = [];
    // data: object[];
    // xData: string[];

    option = {
        color: ['#216f99', '#1bd29c'],
        title: {
            text: '无内容',
            subtext: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        toolbox: {
        },
        calculable : true,
        xAxis: [
            {
                type : 'category',
                boundaryGap : false,
                max: 7,
                data: []
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series: []
    };

    makeLineChart(options) {
        this.option.title = options.title;
        this.option.xAxis[0].data = options.xData;
        for (const item in options.data) {
            if (item) {
                this.option.legend.data.push(options.data[item].name);
                options.data[item].type = 'line';
                options.data[item].smooth = true;
                options.data[item].itemStyle =  {normal: {areaStyle: {type: 'default'}}};
            }
        }
        this.option.series = options.data;
        return this.option;
    }
}
