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
  constructor() { }

  ngOnInit(): void {
    this.asset?.models.forEach(m => { m.last_tuning = m.last_updated.replace(' ', 'T').substring(0,23)+'Z';});

    if (this.asset){
      this.asset.hitratios.forEach(m =>{
        this.ratiolist.push(m.hitratio*100);
    })
    
    this.historyChartOption = {
      title: {
        text: 'historic hitratio',
        textStyle: {
          color: '#fff',
        },
      },
      axisPointer: { type: 'cross' },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value',
        min: this.getlowest(),
        max: this.gethighest()
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
      xAxis: {
        type: 'category',
        data: this.getDates(),
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
      },
      series: [
        {
          type: 'candlestick',
          data: this.getseries(),
          itemStyle: {
            color: '#FD1050',
            color0: '#0CF49B',
            borderColor: '#FD1050',
            borderColor0: '#0CF49B'
          }
        }
      ]
    }
    }
  }

  
  getlowest(){
    return Math.floor(Math.min(...this.ratiolist))
  }
  gethighest(){
    return Math.ceil(Math.max(...this.ratiolist))
  }

  getDates(){
    if (this.asset){
      let c = JSON.parse(this.asset.candles)
      
      return [
        new Date(c[0]['time']*1000).toLocaleTimeString(),
        new Date(c[1]['time']*1000).toLocaleTimeString(),
        new Date(c[2]['time']*1000).toLocaleTimeString(),
        new Date(c[3]['time']*1000).toLocaleTimeString(),
        new Date(c[4]['time']*1000).toLocaleTimeString(),
        new Date(c[5]['time']*1000).toLocaleTimeString(),
        new Date(c[6]['time']*1000).toLocaleTimeString(),
        new Date(c[7]['time']*1000).toLocaleTimeString(),
        new Date(c[8]['time']*1000).toLocaleTimeString(),
        new Date(c[9]['time']*1000).toLocaleTimeString(),
        new Date(c[10]['time']*1000).toLocaleTimeString(),
        new Date(c[11]['time']*1000).toLocaleTimeString(),
        new Date(c[12]['time']*1000).toLocaleTimeString(),
        new Date(c[13]['time']*1000).toLocaleTimeString(),
        new Date(c[14]['time']*1000).toLocaleTimeString(),
        new Date(c[15]['time']*1000).toLocaleTimeString(),
        new Date(c[16]['time']*1000).toLocaleTimeString(),
        new Date(c[17]['time']*1000).toLocaleTimeString(),
        new Date(c[18]['time']*1000).toLocaleTimeString(),
        new Date(c[19]['time']*1000).toLocaleTimeString(),
        new Date(c[20]['time']*1000).toLocaleTimeString(),
        new Date(c[21]['time']*1000).toLocaleTimeString(),
        new Date(c[22]['time']*1000).toLocaleTimeString(),
        new Date(c[23]['time']*1000).toLocaleTimeString(),
        new Date(c[24]['time']*1000).toLocaleTimeString(),
        new Date(c[25]['time']*1000).toLocaleTimeString(),
        new Date(c[26]['time']*1000).toLocaleTimeString(),
        new Date(c[27]['time']*1000).toLocaleTimeString(),
        new Date(c[28]['time']*1000).toLocaleTimeString(),
        new Date(c[29]['time']*1000).toLocaleTimeString(),
        new Date(c[30]['time']*1000).toLocaleTimeString(),
        new Date(c[31]['time']*1000).toLocaleTimeString(),
        new Date(c[32]['time']*1000).toLocaleTimeString(),
        new Date(c[33]['time']*1000).toLocaleTimeString(),
        new Date(c[34]['time']*1000).toLocaleTimeString(),
        new Date(c[35]['time']*1000).toLocaleTimeString(),
        new Date(c[36]['time']*1000).toLocaleTimeString(),
        new Date(c[37]['time']*1000).toLocaleTimeString(),
        new Date(c[38]['time']*1000).toLocaleTimeString(),
        new Date(c[39]['time']*1000).toLocaleTimeString(),
        new Date(c[40]['time']*1000).toLocaleTimeString(),
        new Date(c[41]['time']*1000).toLocaleTimeString(),
        new Date(c[42]['time']*1000).toLocaleTimeString(),
        new Date(c[43]['time']*1000).toLocaleTimeString(),
        new Date(c[44]['time']*1000).toLocaleTimeString(),
        new Date(c[45]['time']*1000).toLocaleTimeString(),
        new Date(c[46]['time']*1000).toLocaleTimeString(),
        new Date(c[47]['time']*1000).toLocaleTimeString(),
        new Date(c[48]['time']*1000).toLocaleTimeString(),
        new Date(c[49]['time']*1000).toLocaleTimeString(),
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
      let c = JSON.parse(this.asset.candles)
      
      return [
        [c[0]['close'],c[0]['open'],c[0]['high'],c[0]['low']],
        [c[1]['close'],c[1]['open'],c[1]['high'],c[1]['low']],
        [c[2]['close'],c[2]['open'],c[2]['high'],c[2]['low']],
        [c[3]['close'],c[3]['open'],c[3]['high'],c[3]['low']],
        [c[4]['close'],c[4]['open'],c[4]['high'],c[4]['low']],
        [c[5]['close'],c[5]['open'],c[5]['high'],c[5]['low']],
        [c[6]['close'],c[6]['open'],c[6]['high'],c[6]['low']],
        [c[7]['close'],c[7]['open'],c[7]['high'],c[7]['low']],
        [c[8]['close'],c[8]['open'],c[8]['high'],c[8]['low']],
        [c[9]['close'],c[9]['open'],c[9]['high'],c[9]['low']],
        [c[10]['close'],c[10]['open'],c[10]['high'],c[10]['low']],
        [c[11]['close'],c[11]['open'],c[11]['high'],c[11]['low']],
        [c[12]['close'],c[12]['open'],c[12]['high'],c[12]['low']],
        [c[13]['close'],c[13]['open'],c[13]['high'],c[13]['low']],
        [c[14]['close'],c[14]['open'],c[14]['high'],c[14]['low']],
        [c[15]['close'],c[15]['open'],c[15]['high'],c[15]['low']],
        [c[16]['close'],c[16]['open'],c[16]['high'],c[16]['low']],
        [c[17]['close'],c[17]['open'],c[17]['high'],c[17]['low']],
        [c[18]['close'],c[18]['open'],c[18]['high'],c[18]['low']],
        [c[19]['close'],c[19]['open'],c[19]['high'],c[19]['low']],
        [c[20]['close'],c[20]['open'],c[20]['high'],c[20]['low']],
        [c[21]['close'],c[21]['open'],c[21]['high'],c[21]['low']],
        [c[22]['close'],c[22]['open'],c[22]['high'],c[22]['low']],
        [c[23]['close'],c[23]['open'],c[23]['high'],c[23]['low']],
        [c[24]['close'],c[24]['open'],c[24]['high'],c[24]['low']],
        [c[25]['close'],c[25]['open'],c[25]['high'],c[25]['low']],
        [c[26]['close'],c[26]['open'],c[26]['high'],c[26]['low']],
        [c[27]['close'],c[27]['open'],c[27]['high'],c[27]['low']],
        [c[28]['close'],c[28]['open'],c[28]['high'],c[28]['low']],
        [c[29]['close'],c[29]['open'],c[29]['high'],c[29]['low']],
        [c[30]['close'],c[30]['open'],c[30]['high'],c[30]['low']],
        [c[31]['close'],c[31]['open'],c[31]['high'],c[31]['low']],
        [c[32]['close'],c[32]['open'],c[32]['high'],c[32]['low']],
        [c[33]['close'],c[33]['open'],c[33]['high'],c[33]['low']],
        [c[34]['close'],c[34]['open'],c[34]['high'],c[34]['low']],
        [c[35]['close'],c[35]['open'],c[35]['high'],c[35]['low']],
        [c[36]['close'],c[36]['open'],c[36]['high'],c[36]['low']],
        [c[37]['close'],c[37]['open'],c[37]['high'],c[37]['low']],
        [c[38]['close'],c[38]['open'],c[38]['high'],c[38]['low']],
        [c[39]['close'],c[39]['open'],c[39]['high'],c[39]['low']],
        [c[40]['close'],c[40]['open'],c[40]['high'],c[40]['low']],
        [c[41]['close'],c[41]['open'],c[41]['high'],c[41]['low']],
        [c[42]['close'],c[42]['open'],c[42]['high'],c[42]['low']],
        [c[43]['close'],c[43]['open'],c[43]['high'],c[43]['low']],
        [c[44]['close'],c[44]['open'],c[44]['high'],c[44]['low']],
        [c[45]['close'],c[45]['open'],c[45]['high'],c[45]['low']],
        [c[46]['close'],c[46]['open'],c[46]['high'],c[46]['low']],
        [c[47]['close'],c[47]['open'],c[47]['high'],c[47]['low']],
        [c[48]['close'],c[48]['open'],c[48]['high'],c[48]['low']],
        [c[49]['close'],c[49]['open'],c[49]['high'],c[49]['low']],
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
