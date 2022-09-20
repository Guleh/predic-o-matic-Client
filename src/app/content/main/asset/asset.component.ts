import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset.model';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  constructor(private darkmodeService: DarkmodeService) { }

  @Input()asset!: Asset;

  ngOnInit(): void {
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x)
    if (this.asset){
      console.log(this.asset)
      if(this.asset.current_prediction == 1){
        this.consensus = this.asset.ups;
      } else if (this.asset.current_prediction == 0) {
        this.consensus = this.asset.downs;
      }
      this.totalconsensus = this.asset!.ups + this.asset.downs;
    }
  }



  totalconsensus: number = 0;
  consensus: number = 0;
  
  darkmode: boolean = true;

  display: boolean = false;

  onPress() {
    this.display = !this.display;
  }
}