import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x) 
    this.year = new Date().getFullYear();
  }

  
  darkmode: boolean = true;
  year: number = 2022;

}
