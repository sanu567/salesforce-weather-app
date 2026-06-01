import { LightningElement,track } from 'lwc';

export default class DashBoard extends LightningElement {
    totalorder=152;
    activeMachines=18;
    efficiency=94;
    openTickets=6;

    @track data=[
        {
            id: '1',
            machine: 'Machine A',
            status: 'Running',
            production: '1200'
        },
        {

            id: '2',
            machine: 'Machine B',
            status: 'Maintenance',
            production: '1510'
        },
        {

            id: '3',
            machine: 'Machine C',
            status: 'Running',
            production: '2000'
        },
         {

            id: '4',
            machine: 'Machine D',
            status: 'Maintenance',
            production: '1000'
        }
    ];

    columns=[
        {label:'Machine',fieldName:'machine'},
        {label:'Status',fieldName:'status'},
        {label:'Production',fieldName:'production',type:'number'}
    ];

    
}