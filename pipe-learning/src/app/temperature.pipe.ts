import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number | string, inputType: 'C' | 'F', outputType?: 'C' | 'F'): unknown {
    let symbol = outputType === 'C' ? '°C' : '°F';
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (inputType === 'C' && outputType === 'F') {
      value = (value * 9 / 5) + 32;
      return `${value.toFixed(2)} ${symbol}`;
    }
    if (inputType === 'F' && outputType === 'C') {
      value = (value - 32) * 5 / 9;
      return `${value.toFixed(2)} ${symbol}`;
    }
    else {
      return `${value.toFixed(2)} ${symbol}`;
    }

  }
}
