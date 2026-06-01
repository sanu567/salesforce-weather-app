import { LightningElement,api } from 'lwc';
import{deleteRecord } from 'lightning/uiRecordApi';

export default class DeleteRecordButton extends LightningElement {
    @api recordId;

    handleDelete(){
        deleteRecord(this.recordId)
        .then((result)=>{
            console.log('Record deleted',result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}