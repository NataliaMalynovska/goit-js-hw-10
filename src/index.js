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
    .then(name => {countryList.innerHTML = responseInterface(name)})
    .catch(Notify.failure("Oops, there is no country with that name"))

}



function responseInterface(name) {
    const [flags, common, capital, population, languages ] = name;
    console.log(name)

    if (name.length > 1 && name.length < 11  ) {
            return name.map(({ flags, common }) => `<li class="country-item"> <img src=${flags.svg} width="70"><h2 class="country-name">${common}</h2> </li>`);
        };
    if (name.length<2) {
          return name.map(({ flags, common }) =>`<div><div class="country-item"> <img src=${flags.svg} width="70"> <h2 class="country-name">${name.official}</h2> </div> <p class = "country-feature">Capital: ${name.capital}</p><p class = "country-feature">Population: ${name.population}</p><p class = "country-feature">Languages: ${name.languages}</p></div>`)
    }
    else 
            console.log(name.length)
            return " ";
        Notify.info("Too many matches found. Please enter a more specific name.");
}


