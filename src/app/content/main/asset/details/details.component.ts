import { Component, Input, OnInit } from '@angular/core';
import { Algo } from 'src/app/models/algo.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()models?:Algo[];
  constructor() { }

  ngOnInit(): void {
  }

}
