var fillInPage = (function() {

    var updateCityText = function(geoipResponse) {
    
      let stateName
      if(geoipResponse == null){
        stateName = "!"
      }
      else{
        stateName = "in " + geoipResponse.subdivisions[0].iso_code + "!"|| '!';
      }
      
  
      document.getElementById('state-code').innerHTML = stateName
    };
  
    var onSuccess = function(geoipResponse) {
        
      updateCityText(geoipResponse);
    };
  
    // If we get an error, we will display an error message
    var onError = function(error) {
      console.log('Error')
    };
  
    return function() {
      if (typeof geoip2 !== 'undefined') {
        geoip2.city(onSuccess, onError);
      } else {
        document.getElementById('state-code').innerHTML= "!"
      }
    };
}());
  
fillInPage();