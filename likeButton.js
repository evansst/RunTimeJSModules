
const likeButton = document.getElementById('like-button');
likeButton.addEventListener('click', ()=> updateLikes());

const likes = document.getElementById('likes');

function updateLikes(){
  likes.innerHTML++;
}

export { updateLikes };