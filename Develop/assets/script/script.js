const apiKey = "9b34f3d8e44556d061ce903c12392dab";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString()
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
}

function round(num) {
    return Math.ceil(num * 100) / 100;
}

function search_clicked() {
    var city = document.getElementById("tvSearch").value;

    document.getElementById("buttons_list").innerHTML = document.getElementById("buttons_list").innerHTML + "<br/><br/>" + "<button style=\"background-color: rgb(73, 32, 209); color: white; margin-right: 16px;; margin-left: 0px; height: 40px; width: 100%;\" onclick=\"city_clicked('" + city + "')\">" + city + "</button>";

    document.getElementById("tvSearch").value = "";
}

function city_clicked(city)  {
    document.getElementById("city_title").innerHTML = city + " " + getFormattedDate(new Date());

    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey;

    var json = JSON.parse(httpGet(url));

    var lat = json[0].lat;
    var lon = json[0].lon;

    console.log("lat: " + lat);
    console.log("lon: " + lon);
    
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    
    var json2 = JSON.parse(httpGet(weatherUrl));

    let temp = json2.list[0].main.temp;
    let humidity = json2.list[0].main.humidity;
    let icon = json2.list[0].weather[0].icon;
    let speed = json2.list[0].wind.speed;

    let dt1 = json2.list[0].dt;
    let temp1 = json2.list[0].main.temp;
    let humidity1 = json2.list[0].main.humidity;
    let icon1 = json2.list[0].weather[0].icon;
    let speed1 = json2.list[0].wind.speed;

    let dt2 = json2.list[8].dt;
    let temp2 = json2.list[8].main.temp;
    let humidity2 = json2.list[8].main.humidity;
    let icon2 = json2.list[8].weather[0].icon;
    let speed2 = json2.list[8].wind.speed;

    let dt3 = json2.list[16].dt;
    let temp3 = json2.list[16].main.temp;
    let humidity3 = json2.list[16].main.humidity;
    let icon3 = json2.list[16].weather[0].icon;
    let speed3 = json2.list[16].wind.speed;

    let dt4 = json2.list[24].dt;
    let temp4 = json2.list[24].main.temp;
    let humidity4 = json2.list[24].main.humidity;
    let icon4 = json2.list[24].weather[0].icon;
    let speed4 = json2.list[24].wind.speed;

    let dt5 = json2.list[32].dt;
    let temp5 = json2.list[32].main.temp;
    let humidity5 = json2.list[32].main.humidity;
    let icon5 = json2.list[32].weather[0].icon;
    let speed5 = json2.list[32].wind.speed;

    document.getElementById("icon_image").src = "http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("icon_image").style.display = "block";

    document.getElementById("temp").innerHTML = "Temp: " + round(((temp - 273.15) * 1.8 + 32)) + " F";
    document.getElementById("wind").innerHTML = "Wind: " + speed + " MPH";
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity + " %";


    document.getElementById("icon_image1").src = "http://openweathermap.org/img/w/" + icon1 + ".png";
    document.getElementById("icon_image1").style.display = "block";

    document.getElementById("day1").innerHTML += getFormattedDate(new Date(dt1 * 1000)) + "<br/><br/>";
    document.getElementById("day1").innerHTML += "Temp: " + round(((temp - 273.15) * 1.8 + 32)) + " F" + "<br/><br/>";
    document.getElementById("day1").innerHTML += "Wind: " + speed + " MPH" + "<br/><br/>";
    document.getElementById("day1").innerHTML += "Humidity: " + humidity + " %";

    ///////

    document.getElementById("icon_image2").src = "http://openweathermap.org/img/w/" + icon2 + ".png";
    document.getElementById("icon_image2").style.display = "block";

    document.getElementById("day2").innerHTML += getFormattedDate(new Date(dt2 * 1000)) + "<br/><br/>";
    document.getElementById("day2").innerHTML += "Temp: " + round(((temp2 - 273.15) * 1.8 + 32)) + " F" + "<br/><br/>";
    document.getElementById("day2").innerHTML += "Wind: " + speed2 + " MPH" + "<br/><br/>";
    document.getElementById("day2").innerHTML += "Humidity: " + humidity2 + " %";

    ////////

    document.getElementById("icon_image3").src = "http://openweathermap.org/img/w/" + icon3 + ".png";
    document.getElementById("icon_image3").style.display = "block";

    document.getElementById("day3").innerHTML += getFormattedDate(new Date(dt3 * 1000)) + "<br/><br/>";
    document.getElementById("day3").innerHTML += "Temp: " + round(((temp3 - 273.15) * 1.8 + 32)) + " F" + "<br/><br/>";
    document.getElementById("day3").innerHTML += "Wind: " + speed3 + " MPH" + "<br/><br/>";
    document.getElementById("day3").innerHTML += "Humidity: " + humidity3 + " %";

    //////

    document.getElementById("icon_image4").src = "http://openweathermap.org/img/w/" + icon4 + ".png";
    document.getElementById("icon_image4").style.display = "block";

    document.getElementById("day4").innerHTML += getFormattedDate(new Date(dt4 * 1000)) + "<br/><br/>";
    document.getElementById("day4").innerHTML += "Temp: " + round(((temp4 - 273.15) * 1.8 + 32)) + " F" + "<br/><br/>";
    document.getElementById("day4").innerHTML += "Wind: " + speed4 + " MPH" + "<br/><br/>";
    document.getElementById("day4").innerHTML += "Humidity: " + humidity4 + " %";

    //////

    document.getElementById("icon_image5").src = "http://openweathermap.org/img/w/" + icon5 + ".png";
    document.getElementById("icon_image5").style.display = "block";

    document.getElementById("day5").innerHTML += getFormattedDate(new Date(dt5 * 1000)) + "<br/><br/>";
    document.getElementById("day5").innerHTML += "Temp: " + round(((temp5 - 273.15) * 1.8 + 32)) + " F" + "<br/><br/>";
    document.getElementById("day5").innerHTML += "Wind: " + speed5 + " MPH" + "<br/><br/>";
    document.getElementById("day5").innerHTML += "Humidity: " + humidity5 + " %";
}