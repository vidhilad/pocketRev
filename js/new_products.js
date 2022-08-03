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
const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');

const cardHolder = document
    .querySelector('#main_content');

cardHolder
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';

    });