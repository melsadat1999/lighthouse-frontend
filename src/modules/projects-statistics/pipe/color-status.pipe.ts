import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorStatus',
})
export class ColorStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (value <= 33 || value <= 65) {
      return 'bg-yellow-400';
    } else if (value <= 66 || value <= 90) {
      return 'bg-teal-400';
    } else {
      return 'bg-green-400';
    }
  }
}
