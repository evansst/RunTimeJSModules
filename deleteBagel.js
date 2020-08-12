const base_url = 'http://bagel-api-fis.herokuapp.com/bagels';


function createDeleteButton(li){
  const deleteButton = document.createElement('button');

  deleteButton.innerText = 'delete';

  li.appendChild(deleteButton);
  deleteButton.addEventListener('click', (event)=> deleteBagel(event.target.parentNode));
}

function deleteBagel(li){
  fetch(`${base_url}/${li.id}`, {method:'DELETE'});
  li.remove();
}

export { createDeleteButton };