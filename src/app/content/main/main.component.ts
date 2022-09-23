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
      });
      if(assets.length < 0){
        this.empty = true;
      }
      this.isLoading=false;
    })
    this.assetService.fetchAssets();
  }

  assets: Asset[] = [];

  darkmode: boolean = true;
}
