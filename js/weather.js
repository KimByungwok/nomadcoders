function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const APIkey = "c4d4042456ef1460236d252122355af6";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weatherContainer = document.querySelector("#weather span:first-child");
            //const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} / ${data.name}`;
        });
    //console.log("You live in",lat,lon);
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
