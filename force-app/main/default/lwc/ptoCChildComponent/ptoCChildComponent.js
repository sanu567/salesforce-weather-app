import { LightningElement } from 'lwc';

export default class PtoCChildComponent extends LightningElement {
    messsage="";
    handleDispach(){
        const env = new CustomEvent('hide');
        this.dispatchEvent(env);
    }
    handlemsg(event){
        this.messsage=event.target.value;
    }
    dispachData(){
        const evn2= new CustomEvent('senddata',{
            detail:{
                msg:this.messsage
            }
        });
        this.dispatchEvent(evn2);
    }
}