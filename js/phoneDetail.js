
const thumbs=document.querySelector(".thumb-img").children;
const likeBtn = document.querySelector('#likeBtn');
const disLikeBtn = document.querySelector('#disLikeBtn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const stars = document.querySelector('.comment div.rating')
//rating count
for (let i = 0; i < stars.children.length - 1; i++) {
    stars.children[i].addEventListener('click', (event) => {
        const updateTo = parseInt(event.target.getAttribute('id') ) - 1
        updateStars(updateTo)
    })
}
function updateStars(to) {
  const stars = document.querySelector('.comment div.rating')
  const starValue = document.querySelector('.comment div.rating span')

  for (let i = 0; i < stars.children.length; i++) {
      if (i <= to) {
          stars.children[i].classList.remove('fa-regular')
          stars.children[i].classList.add('fa-solid')
      } else {
          stars.children[i].classList.remove('fa-solid')
          stars.children[i].classList.add('fa-regular')
      }
  }
  starValue.innerText = to + 1
}
    //like btn incrementation
likeBtn.addEventListener('click', ()=>{
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "#0000ff";
})
//dislike button dicrementation
disLikeBtn.addEventListener('click', ()=>{
  input2.value = parseInt(input2.value) - 1;
  input2.style.color = "#ff0000";
})

//image change event
function changeImage(event){
document.querySelector(".pro-img").src=event.children[0].src

for(let i=0; i<thumbs.length;i++){
  thumbs[i].classList.remove("active");
}
event.classList.add("active");
}
