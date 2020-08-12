const base_url = 'http://bagel-api-fis.herokuapp.com/bagels'
fetch(base_url)
    .then(response => response.json())
    .then(response => handleData(response))


function handleData(data){
   return data.forEach(el => renderBagelType(el.type, el.id))
}

const bagelUl = document.getElementById('bagel-ul')

function renderBagelType(bagel, id){
    const li = document.createElement('li')
    li.innerText = bagel
    li.id = id
    bagelUl.appendChild(li)
    createDeleteButton(li)
}

function createDeleteButton(li){
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', (event)=> deleteBagel(event.target.parentNode))
}

function deleteBagel(li){
    fetch(`${base_url}/${li.id}`, {method:'DELETE'})
    li.remove()
}



const likeButton = document.getElementById('like-button')
likeButton.addEventListener('click', ()=> updateLikes())

const likes = document.getElementById('likes')

function updateLikes(){
    likes.innerHTML++
}

const bagelForm = document.getElementById('bagel-form')
bagelForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    getUserInput(event.target)
    bagelForm.reset()
})

function getUserInput(bagelForm){
    const form = new FormData(bagelForm)
    const input = form.get('new-input')
    renderBagelType(input)
    persistBagel(input)
}

function persistBagel(bagel){
    fetch(base_url,{
        method:'POST',
        headers:{
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body:JSON.stringify({type:bagel})
    })
}




