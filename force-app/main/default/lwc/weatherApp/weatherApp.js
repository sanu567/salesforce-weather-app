import { LightningElement,wire } from 'lwc';
import getWeather from '@salesforce/apex/weatherApp.getWeather';
export default class WeatherApp extends LightningElement {
    city;
    temp;
    tempF;
    wind;
    DisplayWeather=false;

    @wire(getWeather)
    weatherResult({data,error}){
         if(data){
            const result=JSON.parse(data);
            this.city = result.location.name;
            this.temp=result.current.temp_c;
            this.tempF=result.current.temp_f;
            this.wind=result.current.wind_mph;
        }
        else if(error){
            console.log(error);
        }
       }

       showWeather(){
        this.DisplayWeather=true;
       }
}