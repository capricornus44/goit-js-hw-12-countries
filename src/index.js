import { fetchCountriesByName } from './js/fetchCountries';
import getRefs from './js/get-refs';
import renderMarkup from './js/render-markup';
import debounce from 'lodash.debounce';
import './styles.css';

const refs = getRefs();

refs.search.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  fetchCountriesByName(event.target.value)
    .then(countries => {
      refs.content.innerHTML = '';
      renderMarkup(countries);
    })
    .catch(() => {
      return;
    });
}
