const listOfComments = []

document.addEventListener('DOMContentLoaded', () => {
    registerObservers()

    registerListeners()

    init()
})

let startX = 50;
let startY = 0;
let frames = 60;
let distance = 200;
let increment = 0
let currentFrame = 0
let x = 50
let y = 50
let endX = 150
let context = null
let textHeight = 24
let canvasHeight = -1

const titles = ['Introduction', 'A Slim, Stylish Design', 'Similar Products', 'Android TV and Google Assistant', 'Hisense U8G Picture Performance', 'The Viewing Experience', 'Best In Class']
let textYOffset = -1
let guideLineX = startX - (startX / 2)
let current = 1
let to = 2

let animatingOffset = -1

function registerListeners() {
    const btnSignUp = document.querySelector('.sign_up_email input[type="button"]')

    btnSignUp.addEventListener('click', (event) => {
        
        const inputEmail = document.querySelector('.sign_up_email input[type="email"]')
        const span = inputEmail.parentElement.nextElementSibling

        const emailValue = inputEmail.value;
        if (emailValue === '') {
            span.style.color = 'red'
            span.innerHTML = 'Email cannot be empty'
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))) {
            span.style.color = 'red'
            span.innerHTML = 'Invalid email'
        } else {
            span.style.color = 'green'
            span.innerHTML = 'Thank you! You have been registered.'
        }
        console.log('Email = ' + emailValue)
    })

    const thumpsUp = document.querySelector('.fa-thumbs-up')
    const thumpsDown = document.querySelector('.fa-thumbs-down')
    const upVotes = document.querySelector('#votes_up')
    const downVotes = document.querySelector('#votes_down')
    let reaction = null

    thumpsUp.addEventListener('click', (event) => {
        thumpsUp.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
        thumpsDown.style.color = 'black'

        updateReaction(reaction)

        let upVoteNumber = parseInt(upVotes.innerText)
        let downVoteNumber = parseInt(downVotes.innerText)
        if (reaction == null || reaction == 'dislike') {
            upVotes.innerText = ++upVoteNumber
        }
        if (reaction == 'dislike') {
            downVotes.innerText = --downVoteNumber
        }
        reaction = 'like'
    })

    thumpsDown.addEventListener('click', (event) => {
        thumpsDown.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
        thumpsUp.style.color = 'black'

        updateReaction(reaction)

        let upVoteNumber = parseInt(upVotes.innerText)
        let downVoteNumber = parseInt(downVotes.innerText)
        if (reaction == null || reaction == 'like') {
            downVotes.innerText = ++downVoteNumber
        }
        if (reaction == 'like'){
            upVotes.innerText = --upVoteNumber
        }
        reaction = 'dislike'
        
    })

    const stars = document.querySelector('.comment div.stars')

    for (let i = 0; i < stars.children.length - 1; i++) {
        stars.children[i].addEventListener('click', (event) => {
            const updateTo = parseInt(event.target.getAttribute('tag') ) - 1
            updateStars(updateTo)
        })
    }

    const btnPost = document.querySelector('#btnPost')

    btnPost.addEventListener('click', (event) => {
        const textArea = document.querySelector('#comment_text')

        if (textArea.value === '') {
            textArea.nextElementSibling.innerText = 'Please enter a comment.'
        } else {
            textArea.nextElementSibling.innerText = ''

            listOfComments.push(textArea.value)
            textArea.value = ''
            updateCommentUI()
        }

        
    })
}

function updateCommentUI() {
    const userComments = document.querySelector('#user_comments')

    console.log(listOfComments)

    while (userComments.firstChild) {
        userComments.removeChild(userComments.lastChild)
    }

    for (let i = 0; i < listOfComments.length; i++) {
        const divContainer = document.createElement('div')
        const commentP = document.createElement('p')
        commentP.innerText = listOfComments[i]

        divContainer.appendChild(commentP)
        divContainer.style.border = '2px solid'
        divContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
        divContainer.style.paddingLeft = '16px'
        divContainer.style.borderRadius = '16px'
        divContainer.style.marginTop = '4px'

        if (i == listOfComments.length - 1) {
            divContainer.style.opacity = 0
            divContainer.style.animationName = 'fade_in'
            divContainer.style.animationDuration = '1s'
            divContainer.style.animationFillMode = 'forwards'
        }

        userComments.appendChild(divContainer)
    }

}

function updateStars(to) {
    const stars = document.querySelector('.comment div.stars')
    const starValue = document.querySelector('.comment div.stars span')

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

function updateReaction(reaction) {
    const reactedSpan = document.getElementById('reacted')

    if (reaction == null)  {
        let reactedValue = parseInt(reactedSpan.innerText)
        reactedSpan.innerText = ++reactedValue
    }
}

function registerObservers() {
    const canvas = document.querySelector('#myCanvas')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animate(titles.indexOf(entry.target.innerHTML))
            }
        })
    }, { rootMargin: '-200px'})

    observer.observe(document.querySelector('#introduction h2'))
    observer.observe(document.querySelector('#design h2'))
    observer.observe(document.querySelector('#similar_products h2'))
    observer.observe(document.querySelector('#assistant h2'))
    observer.observe(document.querySelector('#performance h2'))
    observer.observe(document.querySelector('#experience h2'))
    observer.observe(document.querySelector('#conclusion h2'))


    const authorObserver = new IntersectionObserver((entries) => {
        console.log('In auther observer ' + window.pageYOffset + ' viewport height = ' + window.innerHeight)
        //console.log(entries)
        entries.forEach((entry) => {
            if (entry.time > 500 || window.pageYOffset > window.innerHeight) {
                if (entry.isIntersecting) {
                    canvas.style.animationName = 'fade_out'
                    canvas.style.animationDuration = '200ms'
                    canvas.style.animationFillMode = 'forwards'
                    
                } else {
                    canvas.style.animationName = 'fade_in'
                    canvas.style.animationDuration = '500ms'
                    canvas.style.animationFillMode = 'forwards'
                }
            }
        })
    })

    authorObserver.observe(document.querySelector('.article_info'))
    authorObserver.observe(document.querySelector('.comment'))

    canvas.addEventListener('animationend', (event) => {
        if (event.animationName == 'fade_out') {
            canvas.style.opacity = 0
        } else if (event.animationName == 'fade_in') {
            canvas.style.opacity = 1
        }
    })
}

function init() {
    const canvas = document.getElementById('myCanvas')
    context = canvas.getContext('2d')

    //canvas.style.backgroundColor = 'blue'

    let scale = window.devicePixelRatio

    const width = 300;
    const height = 550;

    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    console.log('Scale = ' + scale)
    canvas.width = width * scale
    canvas.height = height * scale

    context.scale(scale, scale)

    canvasHeight = canvas.height * scale
    context.fillStyle = 'blue'
    textYOffset = canvas.height / (titles.length + 1) / scale
    
    console.log(`Y offser ${textYOffset}`)

    context.font = `${textHeight}px serif`
    for (let index = 0; index < titles.length; index++) {
        let y = startY + ((index + 1) * textYOffset)
        context.textBaseline = 'middle'
        let fitTitle = titles[index]

        if (titles[index].length > 20) {
            fitTitle = titles[index].substr(0, 19)
            fitTitle += '...'
        }
        context.fillText(fitTitle, startX, y)
    }

    context.beginPath()
    context.moveTo(guideLineX, textYOffset - (textYOffset / 2) )
    context.lineTo(guideLineX, (textYOffset * titles.length) + (textYOffset / 2))
    context.strokeStyle = 'lightgray'
    context.stroke()

    context.beginPath()
    context.moveTo(guideLineX, textYOffset * current - (textHeight))
    context.lineTo(guideLineX, textYOffset * current + (textHeight))
    context.strokeStyle = 'green'
    context.lineWidth = 4
    context.stroke()
}

function animate(to1) {
    to = to1 + 1
    requestAnimationFrame(loop)
}

function loop() {
    clearPath()

    update(2)
    draw()

    if (currentFrame < frames) {
        requestAnimationFrame(loop)
    } else {
        currentFrame = 0
        current = to;
    }
}

function clearPath() {
    context.clearRect(guideLineX - 2, textYOffset - (textYOffset), guideLineX + 2, (textYOffset * titles.length) + (textYOffset))

    context.beginPath()
    context.moveTo(guideLineX, textYOffset - (textYOffset / 2) )
    context.lineTo(guideLineX, (textYOffset * titles.length) + (textYOffset / 2))
    context.strokeStyle = 'lightgray'
    context.lineWidth = 1
    context.stroke()
}

function update(speed) {
    currentFrame += speed
}

function easeInOutQuad (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

function draw() {
    let animatingOffset = textYOffset * current + getY()

    context.beginPath()
    context.moveTo(guideLineX, animatingOffset - (textHeight ))
    context.lineTo(guideLineX, animatingOffset + (textHeight ))
    context.strokeStyle = 'green'
    context.lineWidth = 4
    context.stroke()
}

function getY() {
    const distance = textYOffset * to - textYOffset * current
    //return distance / frames * currentFrame
    return easeInOutQuad(currentFrame, 0, distance, frames)

}