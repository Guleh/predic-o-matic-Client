import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x)
  }

  
  darkmode: boolean = true;

  changeMode(){
    this.darkmodeService.setMode();
  }

}
