import { Component, Input, OnInit } from '@angular/core';
import  * as echarts from 'echarts';
import { Algo } from 'src/app/models/algo.model';
import { Asset } from 'src/app/models/asset.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  @Input()asset?:Asset;
  ratiolist: number[] = [];
  historyChartOption!: echarts.EChartsOption;
  barChartOption!: echarts.EChartsOption;
  candles?: any;
  constructor() { }

  ngOnInit(): void {
    
    this.candles = JSON.parse(this.asset!.candles)
    this.asset?.models.forEach(m => { m.last_tuning = m.last_updated.replace(' ', 'T').substring(0,23)+'Z';});
    
    if (this.asset){
      this.asset.hitratios.forEach(m =>{
        this.ratiolist.push(m.hitratio*100);
    })
    this.ratiolist = this.ratiolist.slice(-50,-1);
    console.log(this.ratiolist.slice())
    
    this.historyChartOption = {
      grid: {
        left: '50px',
        right: '20px'
      },
      title:{
        text: 'history of hitratio',
        textStyle:{
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'montserrat',
          fontStyle: 'normal',
          fontSize: '16'
        },
        left: '6px',
        top: '10%'
      },
      axisPointer: { type: 'cross' },
      xAxis: {
        show: false,
        type: 'category',
        data: this.getHitratioDates(),
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      yAxis: {
        type: 'value',
        scale: true,
        splitLine:{
          lineStyle:{
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      tooltip: {
        showContent: false,
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
      },
      series: [
        {
          data: this.ratiolist,
          type: 'line',
          color: '#85ffed',
          smooth: true,
          areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(133, 255, 237,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(133, 255, 237,0)'
                }
              ])
            }
        }
      ],
    }

    this.barChartOption = {
      grid: {
        left: '5px',
        right: '20px',
        top: '10px',
        bottom: '0px',
      },
      xAxis: {
        show: false,
        type: 'category',
        data: this.getDates(),
      },
      yAxis: {
        show: false,
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
      },
      tooltip: {
        showContent: false,
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
      },
      axisPointer: {
        link: [
          {
            xAxisIndex: 'all'
          }
        ],
        label: {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          color: '#000'
        }
      },
      series: [
        {
          type: 'candlestick',
          data: this.getseries(),
          itemStyle: {
            color0: '#85ffed',
            color: '#ac6a86',
            borderColor0: '#85ffed',
            borderColor: '#ac6a86'
          },
        }
      ],
    }
    }
  }

  
  getlowest(){
    return Math.floor(Math.min(...this.ratiolist))
  }
  gethighest(){
    return Math.ceil(Math.max(...this.ratiolist))
  }

  getHitratioDates(){
    if (this.asset){
      var list:any = []
      if (this.candles){ 
        var c = this.candles
        let i = 0;
        this.ratiolist.forEach(e => {
          list.push(
            new Date(c[99-i]['time']*1000).toUTCString()         
            )
            i++
        });    
        return list.reverse()
      }
      return []
    }
  }

  getDates(){
    if (this.asset){
      let c = this.candles
      
      return [
        new Date(c[50]['time']*1000).toLocaleTimeString(),
        new Date(c[51]['time']*1000).toLocaleTimeString(),
        new Date(c[52]['time']*1000).toLocaleTimeString(),
        new Date(c[53]['time']*1000).toLocaleTimeString(),
        new Date(c[54]['time']*1000).toLocaleTimeString(),
        new Date(c[55]['time']*1000).toLocaleTimeString(),
        new Date(c[56]['time']*1000).toLocaleTimeString(),
        new Date(c[57]['time']*1000).toLocaleTimeString(),
        new Date(c[58]['time']*1000).toLocaleTimeString(),
        new Date(c[59]['time']*1000).toLocaleTimeString(),
        new Date(c[60]['time']*1000).toLocaleTimeString(),
        new Date(c[61]['time']*1000).toLocaleTimeString(),
        new Date(c[62]['time']*1000).toLocaleTimeString(),
        new Date(c[63]['time']*1000).toLocaleTimeString(),
        new Date(c[64]['time']*1000).toLocaleTimeString(),
        new Date(c[65]['time']*1000).toLocaleTimeString(),
        new Date(c[66]['time']*1000).toLocaleTimeString(),
        new Date(c[67]['time']*1000).toLocaleTimeString(),
        new Date(c[68]['time']*1000).toLocaleTimeString(),
        new Date(c[69]['time']*1000).toLocaleTimeString(),
        new Date(c[60]['time']*1000).toLocaleTimeString(),
        new Date(c[71]['time']*1000).toLocaleTimeString(),
        new Date(c[72]['time']*1000).toLocaleTimeString(),
        new Date(c[73]['time']*1000).toLocaleTimeString(),
        new Date(c[74]['time']*1000).toLocaleTimeString(),
        new Date(c[75]['time']*1000).toLocaleTimeString(),
        new Date(c[76]['time']*1000).toLocaleTimeString(),
        new Date(c[77]['time']*1000).toLocaleTimeString(),
        new Date(c[78]['time']*1000).toLocaleTimeString(),
        new Date(c[79]['time']*1000).toLocaleTimeString(),
        new Date(c[80]['time']*1000).toLocaleTimeString(),
        new Date(c[81]['time']*1000).toLocaleTimeString(),
        new Date(c[82]['time']*1000).toLocaleTimeString(),
        new Date(c[83]['time']*1000).toLocaleTimeString(),
        new Date(c[84]['time']*1000).toLocaleTimeString(),
        new Date(c[85]['time']*1000).toLocaleTimeString(),
        new Date(c[86]['time']*1000).toLocaleTimeString(),
        new Date(c[87]['time']*1000).toLocaleTimeString(),
        new Date(c[88]['time']*1000).toLocaleTimeString(),
        new Date(c[89]['time']*1000).toLocaleTimeString(),
        new Date(c[90]['time']*1000).toLocaleTimeString(),
        new Date(c[91]['time']*1000).toLocaleTimeString(),
        new Date(c[92]['time']*1000).toLocaleTimeString(),
        new Date(c[93]['time']*1000).toLocaleTimeString(),
        new Date(c[94]['time']*1000).toLocaleTimeString(),
        new Date(c[95]['time']*1000).toLocaleTimeString(),
        new Date(c[96]['time']*1000).toLocaleTimeString(),
        new Date(c[97]['time']*1000).toLocaleTimeString(),
        new Date(c[98]['time']*1000).toLocaleTimeString(),
        new Date(c[99]['time']*1000).toLocaleTimeString(),
      ]
    }
    return []
  }

  getseries() {
    if (this.asset){
      let c = this.candles
      
      return [
        [c[50]['close'],c[50]['open'],c[50]['high'],c[50]['low']],
        [c[51]['close'],c[51]['open'],c[51]['high'],c[51]['low']],
        [c[52]['close'],c[52]['open'],c[52]['high'],c[52]['low']],
        [c[53]['close'],c[53]['open'],c[53]['high'],c[53]['low']],
        [c[54]['close'],c[54]['open'],c[54]['high'],c[54]['low']],
        [c[55]['close'],c[55]['open'],c[55]['high'],c[55]['low']],
        [c[56]['close'],c[56]['open'],c[56]['high'],c[56]['low']],
        [c[57]['close'],c[57]['open'],c[57]['high'],c[57]['low']],
        [c[58]['close'],c[58]['open'],c[58]['high'],c[58]['low']],
        [c[59]['close'],c[59]['open'],c[59]['high'],c[59]['low']],
        [c[60]['close'],c[60]['open'],c[60]['high'],c[60]['low']],
        [c[61]['close'],c[61]['open'],c[61]['high'],c[61]['low']],
        [c[62]['close'],c[62]['open'],c[62]['high'],c[62]['low']],
        [c[63]['close'],c[63]['open'],c[63]['high'],c[63]['low']],
        [c[64]['close'],c[64]['open'],c[64]['high'],c[64]['low']],
        [c[65]['close'],c[65]['open'],c[65]['high'],c[65]['low']],
        [c[66]['close'],c[66]['open'],c[66]['high'],c[66]['low']],
        [c[67]['close'],c[67]['open'],c[67]['high'],c[67]['low']],
        [c[68]['close'],c[68]['open'],c[68]['high'],c[68]['low']],
        [c[69]['close'],c[69]['open'],c[69]['high'],c[69]['low']],
        [c[70]['close'],c[70]['open'],c[70]['high'],c[70]['low']],
        [c[71]['close'],c[71]['open'],c[71]['high'],c[71]['low']],
        [c[72]['close'],c[72]['open'],c[72]['high'],c[72]['low']],
        [c[73]['close'],c[73]['open'],c[73]['high'],c[73]['low']],
        [c[74]['close'],c[74]['open'],c[74]['high'],c[74]['low']],
        [c[75]['close'],c[75]['open'],c[75]['high'],c[75]['low']],
        [c[76]['close'],c[76]['open'],c[76]['high'],c[76]['low']],
        [c[77]['close'],c[77]['open'],c[77]['high'],c[77]['low']],
        [c[78]['close'],c[78]['open'],c[78]['high'],c[78]['low']],
        [c[79]['close'],c[79]['open'],c[79]['high'],c[79]['low']],
        [c[80]['close'],c[80]['open'],c[80]['high'],c[80]['low']],
        [c[81]['close'],c[81]['open'],c[81]['high'],c[81]['low']],
        [c[82]['close'],c[82]['open'],c[82]['high'],c[82]['low']],
        [c[83]['close'],c[83]['open'],c[83]['high'],c[83]['low']],
        [c[84]['close'],c[84]['open'],c[84]['high'],c[84]['low']],
        [c[85]['close'],c[85]['open'],c[85]['high'],c[85]['low']],
        [c[86]['close'],c[86]['open'],c[86]['high'],c[86]['low']],
        [c[87]['close'],c[87]['open'],c[87]['high'],c[87]['low']],
        [c[88]['close'],c[88]['open'],c[88]['high'],c[88]['low']],
        [c[89]['close'],c[89]['open'],c[89]['high'],c[89]['low']],
        [c[90]['close'],c[90]['open'],c[90]['high'],c[90]['low']],
        [c[91]['close'],c[91]['open'],c[91]['high'],c[91]['low']],
        [c[92]['close'],c[92]['open'],c[92]['high'],c[92]['low']],
        [c[93]['close'],c[93]['open'],c[93]['high'],c[93]['low']],
        [c[94]['close'],c[94]['open'],c[94]['high'],c[94]['low']],
        [c[95]['close'],c[95]['open'],c[95]['high'],c[95]['low']],
        [c[96]['close'],c[96]['open'],c[96]['high'],c[96]['low']],
        [c[97]['close'],c[97]['open'],c[97]['high'],c[97]['low']],
        [c[98]['close'],c[98]['open'],c[98]['high'],c[98]['low']],
        [c[99]['close'],c[99]['open'],c[99]['high'],c[99]['low']],
      ]
    }  
    return [[]]
  }
}
