const thumbs=document.querySelector(".thumb-img").children;
let likeBtn = document.querySelector('#likeBtn');
let disLikeBtn = document.querySelector('#disLikeBtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

likeBtn.addEventListener('click', ()=>{
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "#0000ff";
})
disLikeBtn.addEventListener('click', ()=>{
  input2.value = parseInt(input2.value) - 1;
  input2.style.color = "#ff0000";
})
function changeImage(event){
document.querySelector(".pro-img").src=event.children[0].src

for(let i=0; i<thumbs.length;i++){
  thumbs[i].classList.remove("active");
}
event.classList.add("active");
}