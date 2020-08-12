import { renderBagelType } from './renderBagel.js';

const base_url = 'http://bagel-api-fis.herokuapp.com/bagels';

const bagelForm = document.getElementById('bagel-form');
bagelForm.addEventListener('submit', (event)=> {
  event.preventDefault();
  getUserInput(event.target);
  bagelForm.reset();
});

function getUserInput(bagelForm){
  const form = new FormData(bagelForm);
  const input = form.get('new-input');
  renderBagelType(input);
  persistBagel(input);
}

function persistBagel(bagel){
  fetch(base_url,{
    method:'POST',
    headers:{
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body:JSON.stringify({type:bagel})
  });
}
