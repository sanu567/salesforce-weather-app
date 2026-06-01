import { LightningElement,} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJ from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
export default class PractiseCreateUsingRecordUi extends LightningElement {
    
    name='';

    handleInput(event){
        this.name=event.target.value;
    }

   async handleCreate(){
    const fields={};
    fields[NAME_FIELD.fieldApiName]=this.name;
    const recodId={apiName:ACCOUNT_OBJ.objectApiName,fields};

   try {
     await createRecord(recodId);
     console.log('Account is Created');
   } catch (error) {
    console.log(error);
   }

    }
}