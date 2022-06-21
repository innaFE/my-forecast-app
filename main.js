/*let weather = {
    "paris": {
      temp: 19.7,
      humidity: 80
    },
    "tokyo": {
      temp: 17.3,
      humidity: 50
    },
    "lisbon": {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    "moscow": {
      temp: -5,
      humidity: 20
    }
  };*/

/*let city = prompt("Enter a city");
if (weather[city] !== undefined) {
  let temperture = weather[city].temp;
  let humidity = weather[city].humidity;
  temperture = Math.round(temperture);

  alert(
    `It is currently ${temperture}℃  in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for the this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}*/

//Display current time
let now = new Date();
let currentDate = now.getDate();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

function formatDate(date){
  let formatDate = `${currentDate}/${currentMonth+1}/${currentYear}`
return formatDate;
}

let date = new Date("01/01/2022")

  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

let showDate = document.querySelector("#current-date");
showDate.innerHTML = `${currentDate}/${currentMonth+1}/${currentYear}`

let showTime = document.querySelector("#current-time");
showTime.innerHTML = `${currentHours}:${currentMinutes}`

//challange2
/*
function showSearch(event) {
  event.preventDefault();
  let form = document.querySelector("#search-text-input");
  let searchValue = document.querySelector("#current-city");
  searchValue.innerHTML = form.value;
}

let submit = document.querySelector("#search-city");
submit.addEventListener("submit", showSearch)

//Challange 3
function convertFaringete(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML
temperature = Number(temperature)
temperatureElement.innerHTML = 66;
}

function convertCelsius(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML
temperature = Number(temperature)
temperatureElement.innerHTML = 19;
}
let faringeteLink = document.querySelector("#faringete-degree")
faringeteLink.addEventListener("click", convertFaringete)

let celsiusLink = document.querySelector("#celsius-degree")
celsiusLink.addEventListener("click", convertCelsius)*/


//temperature
function search(city){
  let apiKey = "65d189af80627ac79df43ab66bfa160c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature)
}

function handleSubmit(event){
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value
  search(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function showTemperature(response){
  let currentTemp = document.querySelector("#current-temp")
  currentTemp.innerHTML = Math.round(response.data.main.temp);

  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.name;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML =`Humidity: ${response.data.main.humidity}%`;

  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML =`Wind speed: ${response.data.wind.speed}m/s`;

  let description = document.querySelector("#description");
  description.innerHTML = `It's ${response.data.weather[0].description} now`
}

search("Kyiv")
//current city button

function showPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "65d189af80627ac79df43ab66bfa160c";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature)
}

function getCurrentPosition(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition)
}
let currentButton = document.querySelector("#current-button")
currentButton.addEventListener("click", getCurrentPosition);

