import { LightningElement,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_ACCOUNT from '@salesforce/schema/Contact.AccountId';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordUi extends LightningElement {
    @api recordId;

    contactName='';
    contactPhone=''; 
    
    handleAccountName(event){
        this.contactName=event.target.value;
    }
    handleAccountPhone(event){
        this.contactPhone=event.target.value;
    }

    CreateContact(){
        
        const fields={};
        fields[CONTACT_NAME.fieldApiName]=this.contactName;
        fields[CONTACT_PHONE.fieldApiName]=this.contactPhone;
        fields[CONTACT_ACCOUNT.fieldApiName]=this.recordId;
        const recordInput={apiName: CONTACT_OBJECT.objectApiName,fields};

        createRecord(recordInput)
        .then((result)=> {
            console.log('Account created', result);
            const evn = new ShowToastEvent({
                title:'Contact is Craete successfully',
                message:'ContactId'+result.id,
                variant:"success"
            });
            this.dispatchEvent(evn);
        })
        .catch((error)=>{

            console.error(error);
        })
    }
}