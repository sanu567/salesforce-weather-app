import { LightningElement} from 'lwc';
import getOpportunity from '@salesforce/apex/OpportunityHandlerLWC.getOpportunity';
import totalOpportunity from '@salesforce/apex/OpportunityHandlerLWC.totalOpportunity';

export default class DataTableExample extends LightningElement {

    data=[];
    columns=[
        {label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
        {label:'Opportunity Amount',fieldName:'Amount',type:'currency'},
        {label:'Opportunity Stage',fieldName:'StageName',type:'text'}
    ];
    
   offset=0;;
   limit=5;
   totalCount=0;
   isLoading=false;
   loadMoreStatus='';

   connectedCallback(){
    this.loadInitial();
   }

   loadInitial(){
    totalOpportunity()
    .then((result)=>{
        this.totalCount=result;
        this.loadData();
    })
    .catch((error)=>{
        console.log(error);
    })
   }
   loadData(){
    this.isLoading=true;
    getOpportunity({offsetsize:this.offset,limitset:this.limit})
    .then((result)=>{
        this.data=[...this.data,...result];
        this.offset=this.offset+this.limit;
        this.isLoading=false;
        this.loadMoreStatus=this.data.length >= this.totalCount ? 'No more Record' : 'Show more';
    })
    .catch((error)=>{
        console.log(error);
        this.isLoading=false;
    })
   }

   loadmore(event){
    if(this.data.length >= this.totalCount){
        event.target.isLoading=false;
        return;
    }
    else{
        event.target.isLoading=true;
        this.loadData();
    }
   }

   scrollTop(){
    this.refs.datatable.scrollToTop();
   }

} 