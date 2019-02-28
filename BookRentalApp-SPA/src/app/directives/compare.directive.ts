import { Directive, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '../../../node_modules/@angular/forms';
import { Key } from '../../../node_modules/protractor';


@Directive({
  selector: '[appCompare]',
  providers: [{provide: NG_VALIDATORS, useExisting: CompareDirective, multi: true}]
})
export class CompareDirective implements Validator {

  constructor(@Attribute('appCompare') public comparer: string,
   @Attribute('parent') public parent: string) { }

  validate(c: FormControl): {[Key: string]: any} {
    const e = c.root.get(this.comparer);

    // value not equal in verify control
    if (e && c.value !== e.value && !this.isParent) {
      return {'compare': true };
    }

    // value typing in password is match
    if ( e && c.value === e.value && this.isParent ) {
         delete e.errors['compare'];
         if (!Object.keys(e.errors).length) {
          e.setErrors(null);
         }
    }

    // value typing password is mismatch

    if ( e && c.value !== e.value && this.isParent) {
      return {'compare': true};
    }
  }

  private get isParent() {
    if (!this.parent) {
      return false;
    }

    return this.parent === 'true' ? true : false;
  }

}
