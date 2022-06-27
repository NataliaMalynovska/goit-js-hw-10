import './css/styles.css';
import { fetchCountries } from './fetchCountries'
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
function renderResponse(name) {  
    console.log(name)
    if (name.length > 1 && name.length < 11  ) {
            return name.map(({ flags, name }) => `<li class="country-item"> <img src=${flags.svg} width="70"> <h2 class="country-name">${name.official}</h2> </li>`)
        };
    if (name.length<2) {
             return name.map(({ name, flags,  population, capital, languages: {lang}}) => `<div><div class="country-item"> <img src=${flags.svg} width="70"> <h2 class="country-name">${name.official}</h2> 
          </div> <p class = "country-feature">Capital: ${capital}</p><p class = "country-feature">Population: ${population}</p><p class = "country-feature">Languages: ${lang}</p></div>`)
        }
    else console.log(name.length)
        Notify.info("Too many matches found. Please enter a more specific name.");
        return " ";
        
};


