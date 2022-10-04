import { Component, Input, OnInit } from '@angular/core';
import { Algo } from 'src/app/models/algo.model';
import { Asset } from 'src/app/models/asset.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  @Input()asset?:Asset;
  constructor() { }

  ngOnInit(): void {
    this.asset?.models.forEach(m => { m.last_tuning = m.last_updated.replace(' ', 'T').substring(0,23)+'Z';
    });
  }

}
