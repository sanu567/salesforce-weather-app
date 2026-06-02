public class weatherApp {
      @AuraEnabled(cacheable=true)
    public static String getWeather(String cityName) {
        String apiKey = 'd090e5fbb435442ea7f114223260106';
        HttpRequest req=new HttpRequest();
        req.setEndpoint( 'https://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+cityName);
        req.setMethod('GET');
        
        Http http=new Http();
        HttpResponse rep=http.send(req);
         return rep.getBody();
    }
}