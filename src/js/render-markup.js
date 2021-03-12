import countryCardTmpl from '../template/country-card.hbs';
import countriesListTmpl from '../template/countries-list.hbs';
import getRefs from './get-refs';

import { alert, error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs();

export default function renderMarkup(countries) {
  if (countries.status == '404') {
    error({
      text: 'Country with such a name not found',
    });
    return;
  }

  if (countries.length > 10) {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
    });
    return;
  }

  if (countries.length >= 2 && countries.length <= 10) {
    refs.content.innerHTML = countriesListTmpl(countries);
    return;
  }

  if (countries.length === 1) {
    refs.content.innerHTML = countryCardTmpl(...countries);
    /*
    Don't clear input if country is found. It's bad for UX
    refs.search.value = ''; 
    */
    return;
  }
}
