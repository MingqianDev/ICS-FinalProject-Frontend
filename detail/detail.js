import { getGlobal } from "../globals.js";


const weatherData = JSON.parse(localStorage.getItem('weatherData'));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const date = urlParams.get('date');
const page = urlParams.get('page')

if (page == 0) {
    //today page
    const createAndAppend = (tagName, parentElement, id, className) => {
        const element = document.createElement(tagName);
        if (id) element.setAttribute('id', id);
        if (className) element.classList.add(className);
        parentElement.appendChild(element);
        return element;
    };

    const body = document.querySelector('body');

    const container = createAndAppend('div', body, 'container', 'today');
    const weatherInfo = createAndAppend('div', container, 'weather-info', 'today');
    const todayPage = createAndAppend('span', weatherInfo, null, 'today');
    todayPage.innerText = 'TodayPage';
    console.log('today page');

} else {
    //forecast page
    console.log('forecast page');


}

console.log('weatherData = ', weatherData);