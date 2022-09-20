import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  darkmode: boolean = true;
  modeChanged = new EventEmitter<boolean>();

  getMode(){
    return this.darkmode;
  }

  setMode(){
    this.darkmode = !this.darkmode;
    this.modeChanged.emit(this.darkmode);
  }
}
