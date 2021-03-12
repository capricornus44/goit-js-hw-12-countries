import { fetchCountriesByName } from './js/fetchCountries';
import getRefs from './js/get-refs';
import renderMarkup from './js/render-markup';
import debounce from 'lodash.debounce';
import './styles.css';

const refs = getRefs();

refs.search.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  /*
  It is advisable to clear the content at each INPUT event 
  and not make request to the API if the INPUT IS EMPTY
  */
  refs.content.innerHTML = '';
  if (!event.target.value) {
    return;
  }
  fetchCountriesByName(event.target.value)
    .then(countries => {
      refs.content.innerHTML = '';
      renderMarkup(countries);
    })
    .catch(() => {
      return;
    });
}
