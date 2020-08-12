import { renderBagelType } from './renderBagel.js';
import './likeButton.js';
import './createBagel.js';

const base_url = 'http://bagel-api-fis.herokuapp.com/bagels';

fetch(base_url)
  .then(response => response.json())
  .then(response => handleData(response));


function handleData(data){
  return data.forEach(el => renderBagelType(el.type, el.id));
}
