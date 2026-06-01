import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateMachineryForm extends LightningElement {
    machineName='';
    operatorName='';
    productionCount='';
    status='';
    productionDate='';

    statusOption=[
        {label:'Running' , value:'Running'},
        {label:'Maintenance',value:'Maintenance'},
        {label:'Stopped', value:'Stopped'}
    ]

    handleMachineName(event){
        this.machineName=event.target.value;
    }
    handleOperatorName(event){
        this.operatorName=event.target.value;
    }
    handleProductioncount(event){
        this.productionCount=event.target.value;
    }
    handleStatus(event){
        this.status=event.detail.value;
    }
    handleDateChange(event){
        this.productionDate=event.target.value;
    }

    handleCancel(){
        this.machineName='';
        this.operatorName='';
        this.productionCount='';
        this.status='';
        this.productionDate='';
    }

    handleSave(){
        if(!this.machineName || this.operatorName){
            this,showToast('Error', 'Please fill required fields', 'error');
            return;
        }
        console.log('Saved :',{
            machineName:this.machineName,
            operatorName: this.operatorName,
            productionCount: this.productionCount,
            status: this.status,
            productionDate: this.productionDate
        });
        this.showToast('Success','Production record saved', 'success');
        this.handleCancel();
    }
    showToast(title,message,variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}