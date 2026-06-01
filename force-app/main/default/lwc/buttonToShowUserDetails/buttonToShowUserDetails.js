import { LightningElement ,track} from 'lwc';
import getUser from '@salesforce/apex/getUserDetailsForButton.getUser';

export default class ButtonToShowUserDetails extends LightningElement {
    @track user;
    @track showModel=false;

    handleShowDetails(){
        getUser()
        .then(result=>{
            this.user=result;
            this.showModel=true;
        })
        .catch(error=>{
            console.log(error);
        })
        
    }

    handleClose(){
        this.showModel = false;
    }
}