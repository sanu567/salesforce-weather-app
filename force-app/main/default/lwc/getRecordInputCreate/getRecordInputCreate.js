import { LightningElement ,wire} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getRecordCreateDefaults,generateRecordInputForCreate, createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class GetRecordInputCreate extends LightningElement {
    accName='';
    accPhone='';

    handleAccName(event){
        this.accName=event.target.value;
    }
    handleAccPhone(event){
        this.accPhone=event.target.value;
    }

     @wire(getRecordCreateDefaults,{objectApiName:ACCOUNT_OBJECT})
     RecordDetils;
    createAccount(){
        const objectinfo=this.RecordDetils.data.objectInfos[ACCOUNT_OBJECT.objectApiName]//return Account
        const recordinfo=this.RecordDetils.data.record;
        const recordInput=generateRecordInputForCreate(recordinfo,objectinfo);
        recordInput.fields['Name']=this.accName;
        recordInput.fields['Phone']=this.accPhone;

        createRecord(recordInput)
        .then((result)=>{
            const toast = new ShowToastEvent({
                title:'success',
                message:'Account created',
                variant:'success'
            });
            this.dispatchEvent(toast);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}