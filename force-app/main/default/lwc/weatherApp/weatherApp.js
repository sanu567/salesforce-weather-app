import { LightningElement} from 'lwc';
import getWeather from '@salesforce/apex/weatherApp.getWeather';
export default class WeatherApp extends LightningElement {
    city;
    temp;
    tempF;
    wind;
    DisplayWeather=false;
    inputcityName='';
    
    takeCityName(event){
        this.inputcityName = event.target.value;
    }

       showWeather(){
        getWeather({ cityName: this.inputcityName })
            .then(result => {

                const data = JSON.parse(result);

                this.city = data.location.name;
                this.temp = data.current.temp_c;
                this.tempF = data.current.temp_f;
                this.wind = data.current.wind_mph;

                this.DisplayWeather = true;
            })
            .catch(error => {
                console.error(error);
            });
       }
}