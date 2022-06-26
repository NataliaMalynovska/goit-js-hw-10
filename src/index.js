import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce  from "lodash.debounce";

const DEBOUNCE_DELAY = 300;
const searchForm = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// fetch('https://restcountries.com/v2/all') 


function fetchCountries(name) {
    return fetch('https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages') 
    .then (response => {
        if (!response.ok) {
            throw new Error(response.statusText);
          }
        return response.json();
    })
};
fetchCountries('france');

searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))
function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    console.log(searchQuery)
fetchCountries(searchQuery)
    .then((arr) => responseInterface(arr))
    .catch(Notify.failure("Oops, there is no country with that name"))
    .finally(() => searchForm.reset());
}
const arr = {};
const {capital,population,flags,languages} = arr;

function responseInterface(arr) {
    if (arr.length > 10) {
        console.log(arr.length)
        // Notify.info("Too many matches found. Please enter a more specific name.")
    }
    if (arr.length >= 2 && arr.length  <= 10) {
        console.log(arr.length)
        countryList.innerHTML = makeUpList(arr);
    }
    else console.log(arr.length);
    countryList.innerHTML = makeUpCountryInfo(arr);

}
 function makeUpList({official,capital,population,flags,languages}) {
    return 
    // <div>
    // <li class="country-item">
    //     <div class="country-img">${flags}</div>
    //     <h2 class="country-name">${official}</h2>
    // </li>;    
    // </div>
 }  
 function makeUpCountryInfo({official,capital,population,flags,languages}) {
    return 
//  <div>
//     <div class="country-img">${flags}</div>
//     <h2 class="country-name">${official}</h2>
//     <p class = "country-feature">Capital: ${capital}</p>
//     <p class = "country-feature">Population: ${population}</p>
//     <p class = "country-feature">Languages: ${languages}</p>
//  </div>
 }

// fetch('https://restcountries.com/v3.1/name/peru') 
//     .then (response => {
//         return response.json();
//     })
//     .then (country =>{
//         console.log(country);
//     })
//     .catch (error => {
//         console.log(error);
//     });