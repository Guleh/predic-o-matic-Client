
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

export enum UtcToLocalTimeFormat{
  FULL = 'full',
  SHORT = 'short',
  SHORT_DATE = 'shortDate',
  SHORT_TIME = 'shortTime',
}
@Pipe({
  name: 'UtcToLocalTime',
})
export class UtcToLocalTime implements PipeTransform {
  transform(utcDate: string,
    format: UtcToLocalTimeFormat | string
    ): string{
      var browserLanguage = navigator.language;
      if (format === UtcToLocalTimeFormat.SHORT){
        let date = new Date(utcDate).toLocaleDateString(browserLanguage);
        let time = new Date(utcDate).toLocaleDateString(browserLanguage);
        return `${date}, ${time}`;
      }
      else if (format === UtcToLocalTimeFormat.SHORT_DATE){
        return new Date(utcDate).toLocaleDateString(browserLanguage);
      }
      else if (format === UtcToLocalTimeFormat.SHORT_TIME){
        return new Date(utcDate).toLocaleTimeString(browserLanguage);
      }
        return new Date(utcDate).toString();      
    }
  
}