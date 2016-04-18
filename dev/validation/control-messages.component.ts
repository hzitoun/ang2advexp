/**
 * Created by Hamed on 3/6/2016.
 */
import {NgFormModel} from "angular2/common";
import {ValidationService} from "./validation.service";
import {Component, Host} from 'angular2/core';

@Component({
    selector : 'validation-message',
    template : `
        <span *ngIf="errorMessage !== null">{{errorMessage}}</span>
    `,
    inputs: ['controlName : field'],
    providers : [ValidationService]
})



export class ControlMessages {

    controlName : string;

    constructor(@Host() private _formDir : NgFormModel, private _validService : ValidationService ){

    }

    get errorMessage() : string{
        let field = this._formDir.form.find(this.controlName);
        for(let errorType in field.errors){
                return this._validService.getValidationErrorMsg(errorType);
        }
       return null;
    }

}