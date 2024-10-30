import { AbstractControl } from "@angular/forms";

export function walletAmount(numberInParagraph: string, withdrawAmount: string){
    return function (form: AbstractControl){
        const availableAmountValue = form.get(numberInParagraph)?.value
        const withdrawAmountValue = form.get(withdrawAmount)?.value

        if(availableAmountValue >= withdrawAmountValue && withdrawAmountValue>=0){
            return null;
        }
        else{
            return { walletError : true}
        }
    }
}