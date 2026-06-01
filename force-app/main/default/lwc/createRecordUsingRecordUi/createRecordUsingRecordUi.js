import { LightningElement,wire } from 'lwc';
import { getRecordCreateDefaults,generateRecordInputForCreate,createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJ from '@salesforce/schema/Contact';

export default class CreateRecordUsingRecordUi extends LightningElement {
    objectInfo;
    createRec={};

    @wire(getRecordCreateDefaults, {
        objectApiName: CONTACT_OBJ
    })
    wireDfault({data,error}){
        if(data){
            this.objectInfo=data.objectInfos.Contact;
        }
        else{
            console.log(error);
        }
    }

    handleInput(event){
        this.createRec[event.target.name]=event.target.value;
    }

    async createContact (){
        const filed=this.createRec;

        try {
             const recordInput=generateRecordInputForCreate({apiName:'Contact',fields:filed},this.objectInfo);
             const result= await createRecord(recordInput);
             console.log("contact is created",result.Id);
        } catch (error) {
            console.log(error);
        }
    }
}