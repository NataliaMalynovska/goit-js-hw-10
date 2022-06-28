export  function renderResponse(name) {  
    if (name.length > 1 && name.length < 11  ) {
            return name.map(({ flags, name }) => `<li class="country-item"><img src=${flags.svg} width="70"><h2 class="country-name">${name.official}</h2></li>`)
        };
    if (name.length<2) {
             return name.map(({ name, flags,  population, capital, languages}) => `<div class="country-item"> <img src=${flags.svg} width="70"> <h2 class="country-name">${name.official}</h2> 
          </div> <p class = "country-feature">Capital: ${capital}</p><p class = "country-feature">Population: ${population}</p><p class = "country-feature">Languages: ${Object.values(languages).join(', ')}</p>`)
        }
    else console.log(name.length)
        Notify.info("Too many matches found. Please enter a more specific name.");
        return " ";       
};