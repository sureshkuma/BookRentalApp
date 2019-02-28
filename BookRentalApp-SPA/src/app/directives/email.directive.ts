import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '../../../node_modules/@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true}]
})
export class EmailDirective implements Validator {

  constructor() { }

  validate(c: FormControl): {[Key: string]: any} {

   const emailpattern = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;

    if (c.value == null) {
      return null;
    }

    if (c. value !== '' && (c.value.length <= 5 || !emailpattern.test(c.value)) ) {
      return {'please provide the valid email': true};
     }

  }

}
