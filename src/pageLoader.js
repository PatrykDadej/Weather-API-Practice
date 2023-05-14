import './style.css';
import myIcon from './search.svg';

const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=';
const forecastURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
const APIkey = '163c67a6d82b4cea930215935232204';

const mainSelector = document.querySelector('.main');
const searchAndCard = document.createElement('div');
searchAndCard.classList.add('searchAndCard');
mainSelector.appendChild(searchAndCard);

const searchBarDiv = document.createElement('div');
searchBarDiv.classList.add('searchBarDiv');
searchBarDiv.classList.add('searchBarDivTransition');
const form = document.createElement('form');
searchBarDiv.appendChild(form);
const input = document.createElement('input');
input.classList.add('cityInput');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search Place');
form.appendChild(input);
searchAndCard.appendChild(searchBarDiv);

const searchIcon = document.createElement('img');
searchIcon.setAttribute('src', myIcon);
searchIcon.classList.add('searchIconek');
searchBarDiv.appendChild(searchIcon);
const inputSelector = document.querySelector('.cityInput');

const searchIconSelector = document.querySelector('.searchIconek');

searchIconSelector.addEventListener('click', async () => {
  if (document.querySelector('.weatherCard')) {
    await refreshData(inputSelector.value);
    shakeCard();
  } else {
    insertApiData(inputSelector.value);
  }
  inputSelector.value = '';
});

function shakeCard() {
  console.log('shaker');
  const weatherCardSelector = document.querySelector('.weatherCard');
  console.log('shakee1r');
  weatherCardSelector.setAttribute('style', 'animation: shake 200ms ease-in-out');
  setTimeout(() => {
    weatherCardSelector.setAttribute('style', 'animation: none');
  }, 2000);
}

function createCard(currentData, forecastData) {
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');
  searchAndCard.appendChild(weatherCard);

  // Location Header
  const weatherCardHeader = document.createElement('p');
  weatherCardHeader.textContent = currentData.location;
  weatherCardHeader.classList.add('location');
  weatherCard.appendChild(weatherCardHeader);

  // Current Temperature
  const weatherCardCurrTemp = document.createElement('p');
  weatherCardCurrTemp.classList.add('currentTemp');
  weatherCardCurrTemp.textContent = `${currentData.currentTemp}°C`;
  weatherCard.appendChild(weatherCardCurrTemp);

  // Condition
  const condition = document.createElement('p');
  condition.textContent = currentData.condition;
  condition.classList.add('condition');
  weatherCard.appendChild(condition);

  // 3 Additional Info Div

  const extraInfo = document.createElement('div');
  extraInfo.classList.add('extraInfo');
  weatherCard.appendChild(extraInfo);

  const feelsLikeSection = document.createElement('div');
  feelsLikeSection.textContent = `Feels\r\n${currentData.feelsLike} °C`;
  extraInfo.appendChild(feelsLikeSection);

  const humiditySection = document.createElement('div');
  humiditySection.textContent = `Humidity\r\n${currentData.humidity}%`;
  extraInfo.appendChild(humiditySection);

  const precipitationSection = document.createElement('div');
  precipitationSection.textContent = `Precipitation \r\n${currentData.precipitation} mm`;
  extraInfo.appendChild(precipitationSection);

  // Forecast Section
  const forecast = document.createElement('div');
  forecast.classList.add('forecastSection');
  weatherCard.appendChild(forecast);

  // Tommorow
  const tomorrowDiv = document.createElement('div');
  tomorrowDiv.classList.add('forecastDay');
  tomorrowDiv.classList.add('forecastDayOne');
  forecast.appendChild(tomorrowDiv);

  const tomorrowHeader = document.createElement('p');
  tomorrowHeader.textContent = 'Tomorrow';
  tomorrowHeader.classList.add('forecastDayHeader');
  tomorrowDiv.appendChild(tomorrowHeader);

  const tomorrowIcon = document.createElement('img');
  tomorrowIcon.setAttribute('src', forecastData.dayOne.picture);
  tomorrowIcon.classList.add('forecastIcon');
  tomorrowDiv.appendChild(tomorrowIcon);

  const tomorrowCondition = document.createElement('p');
  tomorrowCondition.textContent = `${forecastData.dayOne.condition}`;
  tomorrowCondition.classList.add('forecastCondition');
  tomorrowDiv.appendChild(tomorrowCondition);

  const tomorrowTemp = document.createElement('p');
  tomorrowTemp.textContent = `${forecastData.dayOne.avTemp} °C`;
  tomorrowTemp.classList.add('forecastTemp');
  tomorrowDiv.appendChild(tomorrowTemp);

  const rainChanceTomorrow = document.createElement('p');
  rainChanceTomorrow.textContent = `${forecastData.dayOne.rainChance}%`;
  rainChanceTomorrow.classList.add('forecastRainChance');
  tomorrowDiv.appendChild(rainChanceTomorrow);

  // AfterTommorow
  const afterTomorrowDiv = document.createElement('div');
  afterTomorrowDiv.classList.add('forecastDay');
  afterTomorrowDiv.classList.add('forecastDayTwo');
  forecast.appendChild(afterTomorrowDiv);
  const afterTomorrowHeader = document.createElement('p');
  afterTomorrowHeader.textContent = 'Day After Tomorrow';
  afterTomorrowHeader.classList.add('forecastDayHeader');
  afterTomorrowDiv.appendChild(afterTomorrowHeader);

  const afterTomorrowIcon = document.createElement('img');
  afterTomorrowIcon.setAttribute('src', forecastData.dayTwo.picture);
  afterTomorrowIcon.classList.add('forecastIcon');
  afterTomorrowDiv.appendChild(afterTomorrowIcon);

  const afterTomorrowCondition = document.createElement('p');
  afterTomorrowCondition.textContent = `${forecastData.dayTwo.condition}`;
  afterTomorrowCondition.classList.add('forecastCondition');
  afterTomorrowDiv.appendChild(afterTomorrowCondition);

  const afterTomorrowTemp = document.createElement('p');
  afterTomorrowTemp.textContent = `${forecastData.dayTwo.avTemp} °C`;
  afterTomorrowTemp.classList.add('forecastTemp');
  afterTomorrowDiv.appendChild(afterTomorrowTemp);

  const rainChanceAfterTomorrow = document.createElement('p');
  rainChanceAfterTomorrow.textContent = `${forecastData.dayTwo.rainChance}%`;
  rainChanceAfterTomorrow.classList.add('forecastRainChance');
  afterTomorrowDiv.appendChild(rainChanceAfterTomorrow);

  return searchIcon;
}

async function apiGetData(city) {
  if (city === undefined) return;
  const urlToFetch = `${weatherURL}${APIkey}&q=${city}&aqi=no`;
  const response = await fetch(urlToFetch);
  const data = await response.json();
  // const currentData = data.location.name;
  const currentData = {
    location: data.location.name,
    condition: data.current.condition.text,
    currentTemp: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    humidity: data.current.humidity,
    precipitation: data.current.precip_mm,
    lastUpdated: data.current.last_updated,
    windSpeed: data.current.wind_kph,
  };
  return currentData;
}

async function apiGetForecast(city) {
  const urlToFetch = `${forecastURL}${APIkey}&q=${city}&days=4&aqi=no&alerts=no`;
  const response = await fetch(urlToFetch);
  const data = await response.json();
  const forecastData = {
    dayOne: {
      date: data.forecast.forecastday[1].date,
      avTemp: data.forecast.forecastday[1].day.avgtemp_c,
      rainChance: data.forecast.forecastday[1].day.daily_chance_of_rain,
      condition: data.forecast.forecastday[1].day.condition.text,
      picture: data.forecast.forecastday[1].day.condition.icon,
    },
    dayTwo: {
      date: data.forecast.forecastday[2].date,
      avTemp: data.forecast.forecastday[2].day.avgtemp_c,
      rainChance: data.forecast.forecastday[2].day.daily_chance_of_rain,
      condition: data.forecast.forecastday[2].day.condition.text,
      picture: data.forecast.forecastday[2].day.condition.icon,
    },
  };
  return forecastData;
}

async function insertApiData(city) {
  const currentdater = await apiGetData(city);
  const forecastdater = await apiGetForecast(city);
  createCard(currentdater, forecastdater);
}

async function refreshData(city) {
  const currentData = await apiGetData(city);
  const forecastData = await apiGetForecast(city);

  document.querySelector('.location').textContent = currentData.location;
  document.querySelector('.currentTemp').textContent = `${currentData.currentTemp}°C`;
  document.querySelector('.extraInfo>*:first-child').textContent = `Feels \r\n${currentData.feelsLike}°C`;
  document.querySelector('.extraInfo>*:nth-child(2)').textContent = `Humidity \r\n${currentData.humidity}%`;
  document.querySelector('.extraInfo>*:nth-child(3)').textContent = `Precipitation \r\n${currentData.precipitation}mm`;

  document.querySelector('.forecastDayOne>.forecastIcon').setAttribute('src', forecastData.dayOne.picture);
  document.querySelector('.forecastDayOne>.forecastCondition').textContent = forecastData.dayOne.condition;
  document.querySelector('.forecastDayOne>.forecastTemp').textContent = forecastData.dayOne.avTemp;
  document.querySelector('.forecastDayOne>.forecastRainChance').textContent = `${forecastData.dayOne.rainChance}%`;

  document.querySelector('.forecastDayTwo>.forecastIcon').setAttribute('src', forecastData.dayTwo.picture);
  document.querySelector('.forecastDayTwo>.forecastCondition').textContent = forecastData.dayTwo.condition;
  document.querySelector('.forecastDayTwo>.forecastTemp').textContent = `${forecastData.dayTwo.avTemp}°C`;
  document.querySelector('.forecastDayTwo>.forecastRainChance').textContent = `${forecastData.dayTwo.rainChance}%`;
}
