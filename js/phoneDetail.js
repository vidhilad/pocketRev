const thumbs=document.querySelector(".thumb-img").children;
let likeBtn = document.querySelector('#likeBtn');
const disLikeBtn = document.querySelector('#disLikeBtn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

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
