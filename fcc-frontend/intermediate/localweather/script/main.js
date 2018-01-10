var lat = 0, 
    lon = 0, 
    degrees = 'C', 
    degreesIcon = 'wi-celsius';

var description, 
    temp, 
    wind, 
    city, 
    country, 
    weatherIcon, 
    windDegreeIcon, 
    /*windSpeedIcon,*/
    date, 
    hours, 
    minutes, 
    time;

function getLocation() {
    if (!navigator.geolocation)
        alert('Geolocation is not supported by your browser!');
    else
        navigator.geolocation.getCurrentPosition(getCoordinates);
};

function getCoordinates(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    callWeatherAPI();
};

function callWeatherAPI() {
    var location = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon;
    //console.log(location);
    $.getJSON(location, getWeatherData);
};

function getWeatherData(data) {
    description = data.weather[0].description;
    temp = Math.round(data.main.temp);
    wind = Math.round(data.wind.speed);
    city = data.name;
    country = data.sys.country;
    date = new Date(data.dt * 1000);
    hours = date.getHours();
    minutes = '0' + date.getMinutes();
    time = hours + ':' + minutes.substr(-2);
    console.log(time);
    weatherIcon = updateWeatherIcon(data.weather[0].id);
    windDegreeIcon = updateWindDegreeIcon(data.wind.deg);
    // windSpeedIcon = updateWindSpeedIcon(wind);
    degreesIcon = updateDegreesIcon(degrees);
    updateWeather();
};

function updateWeather() {
    $('#location').text(city + ', ' + country);
    $('#temperature').text(temp);
    $('#tempIcon').html(' &nbsp<i class="wi '+ degreesIcon + '"></i></div>');
    $('#wind').html(wind + ' MPH &nbsp&nbsp<i class="wi wi-wind ' + windDegreeIcon + '"></i>');
    $('#description').text(description);
    $('#weather').html('<i class="wi ' + weatherIcon + '"></i>');
    $('#time').text('Weather Data retrieved at ' + time + ' CST');
    $('#instructions').text('Click Degrees to Alter Between Celsius & Fahrenheit');
};

function updateWeatherIcon(num) {
    switch (num) {
        case 200: case 201: case 210:
        case 221: case 230: case 231:
            return 'wi-storm-showers';
        case 202: case 211: case 212: case 232:
            return 'wi-thunderstorm';
        case 300: case 301: case 302:
        case 310: case 311: case 312:
        case 313: case 314: case 321:
            return 'wi-rain-mix';
        case 500: case 501: case 502:
        case 503: case 504: case 520:
        case 521: case 522: case 531:
            return 'wi-rain';
        case 511: case 611: case 612:
            return 'wi-sleet';
        case 600: case 601: case 602:
        case 615: case 616: case 620:
        case 621: case 622:
            return 'wi-snow';
        case 701:
            return 'wi-smog';
        case 711:
            return 'wi-smoke';
        case 721:
            return 'wi-day-haze';
        case 731:
            return 'wi-cloudy-gusts';
        case 741:
            return 'wi-fog';
        case 751:
            return 'wi-dust';
        case 761:
            return 'wi-sandstorm';
        case 762:
            return 'wi-volcano';
        case 771:
            return 'wi-strong-wind';
        case 781:
            return 'wi-tornado';
        case 800:
            return 'wi-day-sunny';
        case 801: case 802: case 803: case 951:
            return 'wi-cloudy';
        case 952: case 953:
            return 'wi-windy';
        case 954: case 955: case 956:
            return 'wi-strong-wind';
        case 957: case 958:
            return 'wi-small-craft-advisory';
        case 960: case 961:
            return 'wi-storm-warning';
        case 962:
            return 'wi-hurricane';
        case 989:
            return 'wi-gale-warning';
    }
};

function updateWindDegreeIcon(num) {
    if (num >= 0 && num <= 11)
        return 'from-0-deg';
    else if (num >= 12 && num <= 33)
        return 'from-23-deg';
    else if (num >= 34 && num <= 57)
        return 'from-45-deg';
    else if (num >= 58 && num <= 80)
        return 'from-68-deg';
    else if (num >= 81 && num <= 102)
        return 'from-90-deg';
    else if (num >= 103 && num <= 125)
        return 'from-113-deg';
    else if (num >= 126 && num <= 147)
        return 'from-135-deg';
    else if (num >= 148 && num <= 170)
        return 'from-158-deg';
    else if (num >= 171 && num <= 192)
        return 'from-180-deg';
    else if (num >= 193 && num <= 215)
        return 'from-203-deg';
    else if (num >= 216 && num <= 237)
        return 'from-225-deg';
    else if (num >= 238 && num <= 260)
        return 'from-248-deg';
    else if (num >= 261 && num <= 282)
        return 'from-270-deg';
    else if (num >= 283 && num <= 305)
        return 'from-293-deg';
    else if (num >= 306 && num <= 325)
        return 'from-313-deg';
    else if (num >= 326 && num <= 348)
        return 'from-336-deg';
    else if (num >= 349 && num <= 360)
        return 'from-0-deg';
}

/*function updateWindSpeedIcon(num) {
    switch(num) {
        case 0: return 'wi-wind-beaufort-0';
        case 1: return 'wi-wind-beaufort-1';
        case 2: return 'wi-wind-beaufort-2';
        case 3: return 'wi-wind-beaufort-3';
        case 4: return 'wi-wind-beaufort-4';
        case 5: return 'wi-wind-beaufort-5';
        case 6: return 'wi-wind-beaufort-6';
        case 7: return 'wi-wind-beaufort-7';
        case 8: return 'wi-wind-beaufort-8';
        case 9: return 'wi-wind-beaufort-9';
        case 10: return 'wi-wind-beaufort-10';
        case 11: return 'wi-wind-beaufort-11';
        default: return 'wi-wind-beaufort-12';
    }
}*/

function updateDegreesIcon(val) {
    if (val === 'C') {
        //updateDegreesButton('wi-fahrenheit');
        return 'wi-celsius';
    }
    else if (val === 'F') {
        //updateDegreesButton('wi-celsius');
        return 'wi-fahrenheit';
    }
}

//function updateDegreesButton(val) {
//    $('#degBtn').html('<i class="wi ' + val + '"></i>');
//}

function convertTemperature() {
    if (degrees === 'C') {
        degrees = 'F';
        temp = Math.round(temp * 1.8 + 32);
    } else if (degrees === 'F') {
        degrees = 'C';
        temp = Math.round((temp - 32) / 1.8);
    }
    degreesIcon = updateDegreesIcon(degrees);
    updateWeather();
};

$(document).ready(function() {
    getLocation();
    $('#tempIcon').click(convertTemperature);
});