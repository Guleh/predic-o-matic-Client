import { Component, Input, OnInit } from '@angular/core';
import { AUTO_STYLE } from '@angular/animations';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  
  @Input()data!: number;
  constructor() { }

  ngOnInit(): void { 
    let dirColor = this.getBaseColor(this.data)
    this.data = +(this.data.toFixed(1));
  
    this.chartOption = {
      series: [      
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 100,
          splitNumber: 10,
          animationEasing: 'cubicIn',
          animationEasingUpdate: 'cubicOut',
          animationDuration: 1000,
          itemStyle: { 
            color: dirColor,
            shadowColor: 'rgba(133, 255, 237,0.7)',
            shadowBlur: 10,
          },
          progress: {
            show: true,
            width: 8
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 4,
              color: [
                [0.15, '#b34c71'],
                [0.30, '#ac6a86'],
                [0.45, '#a4879a'],
                [0.60, '#9e9faa'],
                [0.75, '#97b8bc'],
                [0.90, '#90d5d0'],
                [1, '85ffed']
              ]
            }
          },
          axisTick: {
            distance: -45,
            splitNumber: 1,
            lineStyle: {
              width: 0,
              color: '#85ffed'
            }
          },
          splitLine: {
            distance: -5,
            length: 0,
            lineStyle: {
              width: 3,
              color: '#85ffed'
            }
          },
          axisLabel: {
            distance: -20,
            color: 'rgba(133, 255, 237,0.3)',
            textShadowColor: 'rgba(133, 255, 237,0.9)',
            textShadowBlur: 3,   
            fontSize: '0em'
          },
          anchor: {
            show: false
          },
          title: {
            show: true,
            color: 'rgba(133, 255, 237,0.5)',
            fontSize: '0.5em'
          },
          detail: {
            valueAnimation: true,
            lineHeight: 40,
            offsetCenter: [0, '-15%'],
            fontSize: '0.5em',
            fontWeight: 'bolder',
            color: '#85ffed',
            textShadowColor: 'rgba(133, 255, 237,0.4)',
            textShadowBlur: 8                    
          },
          data: [
            {
              value: this.data,
              name: "%"         
            }
          ]
        },
      ],
    };
  }
  
  chartOption!: EChartsOption;









  getBaseColor(value: number){
    if(value < 40){
      return'#b34c71'
    }else if(value < 50){
      return '#ac6a86'
    }else if(value < 55){
      return '#bacecd'
    }else if(value < 60){
      return '#aed1cf'
    }else if(value < 70){
      return '#90d5d0'
    }
    return '#85ffed'    
  }

}
