import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkmodeService.modeChanged.subscribe(x => this.darkmode = x)
  }


  darkmode: boolean = true;

  hidden: boolean = true;
  showsearchbox(){
    console.log(this.hidden)
    this.hidden = !this.hidden;
  }
}