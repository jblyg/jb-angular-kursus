import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertText'
})
export class ConvertTextPipe implements PipeTransform {

  transform(value: string, charToReplace:string, replacementChar:string): unknown {
    return value.replace(new RegExp(charToReplace, 'g'), replacementChar);
  }

}
