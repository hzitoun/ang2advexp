/**
 * Created by Hamed on 3/6/2016.
 */

import {Injectable} from 'angular2/core';

@Injectable()
export class ValidationService{

    ERRORS_MSGS :any = {
        'required' : 'This filed is required'//,
       // 'invalidEmail' : 'Invalid email address'
    };


    getValidationErrorMsg(code : string){
        return this.ERRORS_MSGS[code];
    }

    //static emailValidator(control) {
    //    if(control && control.value){
    //    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
    //        return null;
    //    } else {
    //        return { 'invalidEmail': true };
    //    }
    //    }
    //    else return null;
    //}

}
