const tagLineList = ["tells you what's new and why it matters.", "To help you navigate a world of accelerating change,", "so you are empowered to make decisions about what to do or buy next."]

document.addEventListener('DOMContentLoaded', (e) => {
    const tagLine = document.getElementById('tagline')
    const websiteName = document.getElementById('website_name')
    const downArrow = document.getElementById('down_arrow')

    let index = 0
    tagLine.textContent = tagLineList[index]

    // Once the website name displayed, the tagline animation is started infinitely.
    websiteName.addEventListener('animationend', (e) => {
        tagLine.style.animationName = 'tagLine'
        tagLine.style.animationDuration = '3s'
        tagLine.style.animationIterationCount = 'infinite'
    })

    //After three iteration of tagline, it repeats itself. An arrow is displayed to guide the user.
    tagLine.addEventListener('animationiteration', (e) => {
        if (++index >= 3) index = 0
        tagLine.textContent = tagLineList[index]

        if (e.elapsedTime >= 9 && downArrow.style.opacity == 0) {
            downArrow.style.animationName = 'fade_in'
            downArrow.style.animationDuration = '2s'
            downArrow.style.animationFillMode = 'forwards'
        }
        
    })
})