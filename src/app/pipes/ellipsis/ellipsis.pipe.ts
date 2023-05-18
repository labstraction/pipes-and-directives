import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {

    const numberOfChars = args[0] ? args[0] : 30;

    if (value.length < numberOfChars) {
      return value;
    }

    let first30Chars = '';

    console.log(args);

    for (let i = 0; i < numberOfChars; i++) {
        const element = value[i];
        first30Chars += element;
    }
    return first30Chars + '...';
  }

}
