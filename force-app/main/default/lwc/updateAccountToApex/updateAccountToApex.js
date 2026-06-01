import { LightningElement,api } from 'lwc';
import updateAcc from '@salesforce/apex/AccountUpdateLWC.updateAcc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class UpdateAccountToApex extends LightningElement {
    @api recordId;
    accName='';
    handleAccName(event){
        this.accName=event.target.value;
    }
    updateAccName(){
        updateAcc({recordId:this.recordId ,name:this.accName})
        .then((result)=>{
            const toast = new ShowToastEvent({
                title:'success',
                message:'Account Name Updated',
                variant:'success'
            });
            this.dispatchEvent(toast);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}