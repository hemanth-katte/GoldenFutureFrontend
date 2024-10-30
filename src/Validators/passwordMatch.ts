import { AbstractControl } from "@angular/forms";

export function passwordMatch(password: string, enteredPassword: string){
    return function (form: AbstractControl){
        const passwordValue = form.get(password)?.value
        const enteredPasswordValue = form.get(enteredPassword)?.value

        if(passwordValue == enteredPasswordValue){
            return null;
        }
        return {passwordMismatchError : true}
    }
}