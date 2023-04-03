import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
})
export class toString implements PipeTransform {

  transform(value: any) {
    if (value) {
      return "On Time";
    }
    else return "Late";
  }

}
