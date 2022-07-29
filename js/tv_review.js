document.addEventListener('DOMContentLoaded', () => {


    const context = document.querySelector('#myCanvas').getContext('2d')

    const observer = new IntersectionObserver((entries) => {
        console.log('in entries')
        entries.forEach((entry) => {
            console.log(entry.target.innerHTML)
            console.log(titles.indexOf(entry.target.innerHTML))
            if (entry.isIntersecting) {
                animate(titles.indexOf(entry.target.innerHTML))
            }
        })
    }, { rootMargin: '-200px', threshold: 0})

    observer.observe(document.querySelector('#introduction h2'))
    observer.observe(document.querySelector('#design h2'))
    observer.observe(document.querySelector('#similar_products h2'))
    observer.observe(document.querySelector('#assistant h2'))
    observer.observe(document.querySelector('#performance h2'))
    observer.observe(document.querySelector('#experience h2'))
    observer.observe(document.querySelector('#conclusion h2'))

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


function init() {
    const canvas = document.getElementById('myCanvas')
    context = canvas.getContext('2d')


    let scale = window.devicePixelRatio

    const width = 300;
    const height = 250;

    console.log('Scale = ' + scale)
    canvas.width = Math.floor(width)
    canvas.height = Math.floor(height * scale)

    context.scale(1, 1)

    canvasHeight = canvas.height
    context.fillStyle = 'blue'
    textYOffset = canvas.height / (titles.length + 1)
    
    console.log(`Y offser ${textYOffset}`)

    context.font = `${textHeight}px serif`
    for (let index = 0; index < titles.length; index++) {
        let y = startY + ((index + 1) * textYOffset)
        context.textBaseline = 'middle'
        context.fillText(titles[index], startX, y)
    }

    context.beginPath()
    context.moveTo(guideLineX, textYOffset - (textYOffset / 2) )
    context.lineTo(guideLineX, (textYOffset * titles.length) + (textYOffset / 2))
    context.strokeStyle = 'lightgray'
    context.stroke()

    context.beginPath()
    context.moveTo(guideLineX, textYOffset * current - (textHeight / 1.4))
    context.lineTo(guideLineX, textYOffset * current + (textHeight / 1.4))
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
    context.clearRect(guideLineX - 2, textYOffset - (textYOffset / 1.4), guideLineX + 2, (textYOffset * titles.length) + (textYOffset / 1.4))

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
    context.moveTo(guideLineX, animatingOffset - (textHeight / 1.4))
    context.lineTo(guideLineX, animatingOffset + (textHeight / 1.4))
    context.strokeStyle = 'green'
    context.lineWidth = 4
    context.stroke()
}

function getY() {
    const distance = textYOffset * to - textYOffset * current
    //return distance / frames * currentFrame
    return easeInOutQuad(currentFrame, 0, distance, frames)

}