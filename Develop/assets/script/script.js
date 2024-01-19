function search_clicked() {
    var city = document.getElementById("tvSearch").value;

    document.getElementById("buttons_list").innerHTML = document.getElementById("buttons_list").innerHTML + "<br/><br/>" + "<button style=\"background-color: rgb(73, 32, 209); color: white; margin-right: 16px;; margin-left: 0px; height: 40px; width: 100%;\" onclick=\"city_clicked('" + city + "')\">" + city + "</button>";

    document.getElementById("tvSearch").value = "";
}