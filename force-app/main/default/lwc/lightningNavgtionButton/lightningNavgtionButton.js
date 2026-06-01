import { LightningElement } from 'lwc';
import{NavigationMixin }  from 'lightning/navigation'

export default class LightningNavgtionButton extends NavigationMixin(LightningElement) {
    NavigateatToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    NavigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    NavigateToList(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'list'
            },
            State:{
                filterName:'AllAcount'
            }
        })
    }
}