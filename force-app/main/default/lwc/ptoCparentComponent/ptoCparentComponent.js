import { LightningElement } from 'lwc';

export default class PtoCparentComponent extends LightningElement {
    showchlid=true;
    ReciveData=false;
    dataMsg="";
    hideChildButton(){
        this.showchlid=false;
    }
    handleData(event){
        this.dataMsg=event.detail.msg;
        this.ReciveData=true;
    }
}