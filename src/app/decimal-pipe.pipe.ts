import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipe'
})
export class DecimalPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
