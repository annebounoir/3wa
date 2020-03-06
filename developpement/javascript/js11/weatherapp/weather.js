let CITY_ID = '';
const API_KEY = '92152a52006727e5944a80ceb8182091';
// API DOCS: https://openweathermap.org/current;

function initWeather(city, state) {
  city = city;
  state = state;
}

async function weatherGetWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);


  const responseData = await response.json();
  return responseData;
}

function weatherChangeLocation(city, state) {
  city = city;
  state = state;
}
