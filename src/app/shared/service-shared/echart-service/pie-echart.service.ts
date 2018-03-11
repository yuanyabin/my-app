import { Injectable } from '@angular/core';

@Injectable()

export class PipEchartService {
  constructor() { }

  option = {
    animation: true,
    title: {text: '', x: 'center', y: 'bottom'},
    color: [],
    tooltip: {
      trigger: 'item',
      formatter: '{a}</br>{b} : \n{c} ({d}%)',
      textStyle: {
        fontSize: '14px',
        fontWeight: 'normal'
      }
    },

    series: [
      {
        name: '',
        type: 'pie',
        radius: ['65%', '85%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            formatter: '{a} {b} : \n{c} ({d}%)'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '16',
              fontWeight: 'normal'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
        ]
      }
    ]
  };

  makeChart(options) {
    this.option.series[0].data = options.data;
    this.option.color = options.color;
    this.option.title.text = options.title.text;
    return this.option;
  }
}
