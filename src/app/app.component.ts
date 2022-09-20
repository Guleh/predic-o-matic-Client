import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private darkmodeService: DarkmodeService) { }
  ngOnInit(): void {
    
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x)
  }

  darkmode: boolean = true;
  title = 'ghost';
}
