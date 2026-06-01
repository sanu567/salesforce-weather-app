import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';

export default class GetRecordUsingRecordUi extends LightningElement {
    @api recordId;

    @wire(getRecord,{recordId:'$recordId',fields:[CONTACT_NAME,CONTACT_PHONE]})
    contact;

    get name(){
       return getFieldValue(this.contact.data,CONTACT_NAME);
    }
    
    get industry(){
      return getFieldValue(this.contact.data,CONTACT_PHONE);
    }

}