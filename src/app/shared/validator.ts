import {AbstractControl,ValidatorFn} from '@angular/forms';
import { AbstractControlStatus } from '@angular/forms/src/directives/ng_control_status';
import { Key } from 'protractor';

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
    return (conrtol:AbstractControl):{[Key:string]:any}| null=>{
        const forbidden=forbiddenName.test(conrtol.value);
        return forbidden ? {'forbiddenName':{value:conrtol.value}}:null;
    };
}