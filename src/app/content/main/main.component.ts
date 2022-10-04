import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset.model';
import { AssetService } from 'src/app/services/asset.service';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  isLoading=false;
  empty = false;
  constructor(private darkmodeService: DarkmodeService, private assetService: AssetService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x)
    this.assetService.assetsChanged.subscribe((assets: Asset[])=> {
      this.assets = assets
      this.assets.forEach(asset => {
        this.assetService.getCurrentPrice(asset).subscribe(result => {
          asset.current_price = result[asset.cg_name.toLowerCase()]['usd'];    

        })    
        asset.term =asset.prediction_term.replace(' ', 'T').substring(0,23)+'Z';
 
      });
      if(assets.length < 0){
        this.empty = true;
      }
      this.isLoading=false;
      
      this.sortAssetsBy('name')
      this.showtimeframe('1h')
    })
    this.nameAscending = false;
    this.sentimentAscending = false;
    this.hitratioAscending = false;
    this.scoreAscending = false;
    this.namesorted = 'down';
    this.sentimentsorted = 'neutral';
    this.hitratiosorted= 'neutral';
    this.scoresorted= 'neutral';
    this.assetService.fetchAssets();
  }

  
  assets: Asset[] = [];
  visibleassets: Asset[] = [];
  invisibleassets: Asset[] = [];
  nameAscending!: Boolean;
  sentimentAscending!: Boolean;
  hitratioAscending!: Boolean;
  scoreAscending!: Boolean;
  namesorted?: string;
  sentimentsorted?: string;
  hitratiosorted?: string;
  scoresorted?: string;

  sortAssetsBy(item: string)
  {
    if(item=='name'){
      if(this.nameAscending){
        this.assets.sort((a, b)=> (a.name > b.name ? -1 : 1))
        this.namesorted = 'down';
      }
      else{
        this.assets.sort((a, b)=> (a.name < b.name ? -1 : 1))
        this.namesorted = 'up';
      }
      this.sentimentsorted = 'neutral';
      this.hitratiosorted= 'neutral';
      this.scoresorted= 'neutral';
      this.nameAscending = !this.nameAscending;
    }
    if(item=='sentiment'){
      if(this.sentimentAscending){
        this.assets.sort((a, b)=> (a.sentiment > b.sentiment ? -1 : 1))
        this.sentimentsorted='down';
      }
      else{
        this.assets.sort((a, b)=> (a.sentiment < b.sentiment ? -1 : 1))
        this.sentimentsorted='up';
      }
      this.sentimentAscending = !this.sentimentAscending;
        this.namesorted = 'neutral';
        this.hitratiosorted= 'neutral';
        this.scoresorted= 'neutral';
    }
    if(item=='hitratio'){
      if(this.hitratioAscending){
        this.assets.sort((a, b)=> (a.predictions_correct/a.predictions_total*100 > b.predictions_correct/b.predictions_total*100 ? -1 : 1))
        this.hitratiosorted= 'down';
      }
      else{
        this.assets.sort((a, b)=> (a.predictions_correct/a.predictions_total*100 < b.predictions_correct/b.predictions_total*100 ? -1 : 1))
        this.hitratiosorted= 'up';
      }
        this.hitratioAscending = !this.hitratioAscending;
        this.namesorted = 'neutral';
        this.sentimentsorted='neutral';
        this.scoresorted= 'neutral';
    }
    if(item=='score'){
      if(this.scoreAscending){
        this.assets.sort((a, b)=> (((a!.accuracy*50)+(a!.predictions_correct/a!.predictions_total*50)) > ((b!.accuracy*50)+(b!.predictions_correct/b!.predictions_total*50)) ? -1 : 1))
        this.scoresorted= 'down';
      }
      else{
        this.assets.sort((a, b)=> (((a!.accuracy*50)+(a!.predictions_correct/a!.predictions_total*50)) < ((b!.accuracy*50)+(b!.predictions_correct/b!.predictions_total*50)) ? -1 : 1))
        this.scoresorted= 'up';
      }
        this.scoreAscending = !this.scoreAscending;
        this.namesorted = 'neutral';
        this.sentimentsorted='neutral';
        this.hitratiosorted= 'neutral';
    }
  }
  timeframe?: string; 
  showtimeframe(timeframe:string){
    this.assets.forEach(a => {
      a.isactive = true
    })
    this.timeframe = timeframe
    let visibleassets = this.assets.filter(a => a.timeframe == timeframe)
    this.assets.forEach(a => {
      if (visibleassets.includes(a)){
        a.isactive = true;
      }
      else {
        a.isactive = false;
      }
    })  
  }

  darkmode: boolean = true;
}
