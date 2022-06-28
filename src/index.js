import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { renderResponse } from './renderResponse';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce  from "lodash.debounce";

const DEBOUNCE_DELAY = 300;
const searchForm = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
    let serchFormValue = e.target.value.trim();
fetchCountries(serchFormValue)
    .then(name => {countryList.innerHTML = renderResponse(name)})
    .catch(error => {Notify.failure("Oops, there is no country with that name")     
    })
};



