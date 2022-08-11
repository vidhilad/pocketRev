const liReview = document.getElementById('li_review')
const hamburgerMenu = document.getElementById('hamburger_menu')
const topNav = document.getElementById('top_nav')
const categories = document.getElementById('categories')

let isMenuVisible = false;

liReview.addEventListener('mouseover', (event) => {
    categories.style.display = 'block'
})

liReview.addEventListener('mouseout', (event) => {
    categories.style.display = 'none'
})

hamburgerMenu.addEventListener('click', (event) => {
    console.log('clicked')
    if (isMenuVisible) {
        topNav.style.display = 'none'
    } else {
        topNav.style.display = 'block'
    }
    isMenuVisible = !isMenuVisible
})

/*When user makes menu invisible in mobile versin and expands the screen, 
 *the navigation menu remains invisible. This is not strictly necessary, as in real 
 *world usage, user will not be expanding their browser screen. 
 */
if (matchMedia) {
    window.matchMedia( '(min-width: 800px)' )
        .addListener((mq) => {
            if (mq.matches) {
                topNav.style.display = 'block'
            } else {
                topNav.style.display = 'none'
            }
        })
}

