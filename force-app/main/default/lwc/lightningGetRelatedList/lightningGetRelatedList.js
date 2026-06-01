import { LightningElement,api,wire } from 'lwc';
import{getRelatedListCount} from 'lightning/uiRelatedListApi'


export default class LightningGetRelatedList extends LightningElement {
    @api recordId;
    responsedData;
    @wire(getRelatedListCount,{parentRecordId:'$recordId',relatedListId:'Contacts'})
    RelatedListCount({data,error}){
        if(data){
            console.log('Data ',data);
            this.responsedData=data.count;
        }
        if(error){
            console.log(error);
        }
    }
}