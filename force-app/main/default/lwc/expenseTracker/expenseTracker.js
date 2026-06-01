import { LightningElement, track } from 'lwc';
import createExpense from '@salesforce/apex/ExpenseController.createExpense';
import expense from '@salesforce/apex/ExpenseController.expense';
import deleteExp from '@salesforce/apex/ExpenseController.deleteExp';
export default class ExpenseTracker extends LightningElement {

    expenseRecord={};
    @track data=[];

    categoryOptions=[
        {label:'Food' ,value:'Food'},
        {label:'Travel',value:'Travel'},
        {label:'Shopping', value:'Shopping'},
        {label:'Office',value:'Office'}
    ];

    columns=[
        {label:'Expense Name',fieldName:'Name'},
        {label:'Amount',fieldName:'Amount__c'},
        {label:'category',fieldName:'Category__c'},
        {label:'Date',fieldName:'Expense_Date__c',type:'date'},
        {label:'Notes',fieldName:'Notes__c'},
         {
        type: 'button-icon',
        fixedWidth: 50,
        typeAttributes: {
            iconName: 'utility:delete',
            name: 'delete',
            variant: 'bare',
            alternativeText: 'Delete',
            title: 'Delete'
        }}
    ];

    connectedCallback(){
        this.loadExpense();
    }

    async loadExpense(){
        try{
            this.data=await expense();
        }
        catch(error){
            console.log(error);
        }
    }

    handleChange(event){
        this.expenseRecord[event.target.name]=event.target.value;
    }

    async saveExpense(){
        await createExpense({expense:this.expenseRecord});
        this.loadExpense();
        alert('Successfully save');
        
    }

    async handleDelete(event){
        const actionName=event.detail.action.name;
        const row = event.detail.row;

        if(actionName==='delete'){
            try{
                await deleteExp({ExpId:row.Id});
                alert('Delete successfully')
                await this.loadExpense();
            }catch(error){
                console.log(error);
            }
        }
    }


}