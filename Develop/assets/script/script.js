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
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
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

    document.getElementById("icon_image").src = "http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("icon_image").style.display = "block";

    document.getElementById("temp").innerHTML = "Temp: " + round(((temp - 273.15) * 1.8 + 32)) + " F";
    document.getElementById("wind").innerHTML = "Wind: " + speed + " MPH";
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity + " %";


}