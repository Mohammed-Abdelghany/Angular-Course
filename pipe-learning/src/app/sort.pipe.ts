import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sortArray = [...value];
    if (direction === 'asc') {
      return sortArray.sort((a, b) => (a > b ? 1 : -1));
    }
    else {
      return sortArray.sort((a, b) => (a < b ? 1 : -1));
    }

  }

}
