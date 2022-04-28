import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiersCaracteres'
})
export class PremiersCaracteresPipe implements PipeTransform {

  transform(value:string, nb: number): string {
    if (value.length>=nb)return value.substring(0, nb)+'...';
    else return value;
  }

}
