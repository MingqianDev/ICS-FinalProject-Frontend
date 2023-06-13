import { getGlobal } from "../globals.js";


const weatherData = getGlobal('weatherData')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const date = urlParams.get('date');
const page = urlParams.get('page')

if (page == 0) {
    //today page
    console.log('today page');

} else {
    //forecast page
    console.log('forecast page');


}

console.log('weatherData = ', weatherData);