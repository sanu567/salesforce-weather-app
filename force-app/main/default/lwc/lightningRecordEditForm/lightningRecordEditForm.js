import { LightningElement,api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LightningRecordEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleSubmit(){
        const evn = new ShowToastEvent({
            title:'Success',
            message: 'Record is Updated successfully',
            variant:'success'
        });
        this.dispatchEvent(evn);
    }

    handleError(){
        const evn = new ShowToastEvent({
            title:'Error',
            message:'An error occurred',
            variant:'error'
        });
        this.dispatchEvent(evn);
    }
}