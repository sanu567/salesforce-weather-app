import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import checkDublicate from '@salesforce/apex/DublicateAccountCheckLWC.checkDublicate';
export default class TestLWC extends LightningElement {
    accountName = '';
    createRec = {};
    showCompany = false;
    handleName(event) {
        this.accountName = event.target.value;
    }

    createAccount() {
        checkDublicate({ name: this.accountName })
            .then((checkResult) => {
                if (checkResult) {
                    const fields = { Name: this.accountName };
                    const recordInput = { apiName: 'Account', fields };
                    createRecord(recordInput)
                        .then(account => {
                            console.log('Account created:', account.id);
                        })
                        .catch(error => {

                            console.log('Error:', error);
                        })
                }
                else {
                    console.log('Duplicate account found');
                }

            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    DisplayCompanyName() {
        this.showCompany = true;
    }
}