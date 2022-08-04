function chnageImage()
{
   
    let dname = document.getElementById('img1');
    if(dname.src.match('./images/new_products/c11.jpg'))
    {
        dname.src = './images/new_products/c22.jpg'
    }
    else{
        dname.src = './images/new_products/c11.jpg'
    }

    let d2 = document.getElementById('img2');
    if(d2.src.match('./images/new_products/c22.jpg'))
    {
        d2.src = './images/new_products/c11.jpg'
    }
    else{
        d2.src = './images/new_products/c22.jpg'
    }
    // second image
    let d3 = document.getElementById('img3');
    if(d3.src.match('./images/new_products/l11.jpg'))
    {
        d3.src = './images/new_products/m11.jpg'
    }
    else{
        d3.src = './images/new_products/l11.jpg'
    }
    //third image

      let d4 = document.getElementById('img4');
    if(d4.src.match('./images/new_products/m22.jpg'))
    {
        d4.src = './images/new_products/c11.jpg'
    }
    else{
        d4.src = './images/new_products/m22.jpg'
    }

    //fourth image


      let d5 = document.getElementById('img5');
    if(d5.src.match('./images/new_products/m11.jpg'))
    {
        d5.src = './images/new_products/c22.jpg'
    }
    else{
        d5.src = 'images/new_products/m11.jpg'
    }


    //sixth image
      let d6 = document.getElementById('img6');
    if(d6.src.match('./images/new_products/m33.jpg'))
    {
        d6.src = './images/new_products/c22.jpg'
    }
    else{
        d6.src = './images/new_products/m33.jpg'
    }
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

}