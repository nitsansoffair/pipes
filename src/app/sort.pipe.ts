import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortBy: string): any {
    return value.sort((s1, s2) => {
      if (s1[sortBy] > s2[sortBy]) {
        return 1;
      }

      return -1;
    });
  }

}
