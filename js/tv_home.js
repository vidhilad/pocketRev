const televisions = {
    lgc2: {
        name: "LG C2 Evo OLED TV",
        image: "lg-g2.jpg",
        price: 1796.99,
        store: "Amazon",
        review: 4,
        panel_type: "OLED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "HDMI, RF, USB" ,
        hdr:  "Dolby Vision, HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "569.85 nits",
        black_level: "0 cd/m^2",
        VRR: "YES"
    },
    hisense_u8g: {
        name: "Hisense U8G",
        image: "hisense_u8g.jpg",
        price: 712.99,
        store: "Best Buy",
        review: 4,
        panel_type: "LED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "Composite, HDMI, RF, USB",
        hdr: "Dolby Vision, HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "1763.39 nits",
        black_level: "0.02 cd/m^2",
        VRR: "YES"
    },
    tcl_6series_roku: {
        name: "TCL 6-Series 4K Roku TV",
        image: "tcl-6series-roku.webp",
        price: 648.99,
        store: "Best Buy",
        review: 5,
        panel_type: "LED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "Composite, HDMI, USB",
        hdr: "Dolby Vision, HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "1114.9 nits",
        black_level: "0.02 cd/m^2",
        VRR: "YES"
    },
    tcl_6series_google: {
        name: "TCL 6-Series 4K Google TV",
        image: "tcl_6series.webp",
        price: 649.99,
        store: "Best Buy",
        review: 4,
        panel_type: "LED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "Composite, HDMI, RF, USB",
        hdr: "Dolby Vision, HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "1189.19 nits",
        black_level: "0.01 cd/m^2",
        VRR: "YES"
    },
    samsung_qn90b: {
        name: "Samsung QN90B Neo QLED TV",
        image: "samsung_qn90b.webp",
        price: 2599.99,
        store: "Samsung",
        review: 4.0,
        panel_type: "LCD",
        screen_size: 65,
        resolution: "3840 by 2160",
        video_input: "HDMI, RF, USB" ,
        hdr: "HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "1700.16 nits",
        black_level: "0 cd/m^2",
        VRR: "YES"
    },
    sunbrite_veranda: {
        name: "SunBriteTV Veranda 3 Series",
        image: "sunbrite-veranda-3.webp",
        price: 2895.99,
        store: "Amazon",
        review: 4.0,
        panel_type: "LED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "Composite, HDMI, RF, USB",
        hdr: "Dolby Vision,HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "722.53 nits",
        black_level: "0.2 cd/m^2",
        VRR: "YES"
    },
    hisense_u7G: {
        name: "Hisense U7G",
        image: "hisense-u7g.jpg",
        price: 599.99,
        store: "Amazon",
        review: 4.0,
        panel_type: "LED",
        screen_size: 55,
        resolution: "3840 by 2160",
        video_input: "Composite, HDMI, RF, USB",
        hdr: "Dolby Vision, HDR-10",
        hdmi: 4,
        streaming: "YES",
        brightness: "744.22 nits",
        black_level: "0.01 cd/m^2",
        VRR: "YES"
    }
}

let tv1 = televisions.lgc2
let tv2 = televisions.hisense_u8g
let tv3 = televisions.tcl_6series_roku

const pathToImage = "./images/tv_home/compare_specs/"
const amazonURL = "https://www.amazon.ca"
let mainGrid = undefined
let numberOfColumn = 2 
let showTopicInfo = false

document.addEventListener('DOMContentLoaded', () => {
    mainGrid = document.getElementById('main-grid')

    //Populate select with tv name
    const selectTv1 = document.getElementById('tv1')
    const selecttv2 = document.getElementById('tv2')
    const selecttv3 = document.getElementById('tv3')
    const firstP = document.querySelector('#main-grid p:first-child')

    //handle responsiveness
    const mediaQueryMobile = window.matchMedia('(min-width:750px)')
    const mediaQueryDesktop = window.matchMedia('(min-width: 1400px)')
    if (!mediaQueryMobile.matches) {
        numberOfColumn = 2
        showTopicInfo = false

        firstP.style.display = 'none'
        selecttv3.style.display = 'none'
    } else {
        numberOfColumn = 3
        showTopicInfo = true

        firstP.style.display = 'block'
        selecttv3.style.display = 'block'
    }

    if (mediaQueryDesktop.matches) {
        numberOfColumn = 3
        showTopicInfo = true

        firstP.style.display = 'block'
        selecttv3.style.display = 'block'
    }

    //responsive when screen size changes dynamically
    mediaQueryMobile.addListener((e) => {
        if (!e.matches) {
            numberOfColumn = 2
            showTopicInfo = false

            firstP.style.display = 'none'
            selecttv3.style.display = 'none'

            removeChild()
            updateTvInfoComparison()
        } else {
            numberOfColumn = 3
            showTopicInfo = true

            firstP.style.display = 'block'
            selecttv3.style.display = 'block'

            removeChild()
            updateTvInfoComparison()
        }
    })
    
    //create option and add to select
    for (let tv of Object.keys(televisions)) {
        const option1 = document.createElement('option')
        option1.value = tv
        option1.innerHTML = televisions[tv].name

        const option2 = document.createElement('option')
        option2.value = tv
        option2.innerHTML = televisions[tv].name

        const option3 = document.createElement('option')
        option3.value = tv
        option3.innerHTML = televisions[tv].name

        selectTv1.appendChild(option1)
        selecttv2.appendChild(option2)
        selecttv3.appendChild(option3)
    }

    //Set initial values for select
    selectTv1.value = 'lgc2'
    selecttv2.value = 'hisense_u8g'
    selecttv3.value = 'tcl_6series_roku'

    //update table when user selects new value
    selectTv1.addEventListener('change', (event) => {
        tv1 = televisions[selectTv1.value]

        removeChild()
        updateTvInfoComparison()
    })

    selecttv2.addEventListener('change', (event) => {
        tv2 = televisions[selecttv2.value]

        removeChild()
        updateTvInfoComparison()
    })

    selecttv3.addEventListener('change', (event) => {
        tv3 = televisions[selecttv3.value]

        removeChild()
        updateTvInfoComparison()
    })

    //Geneate tv inot
    updateTvInfoComparison()

})

//Remove all child except the first row
function removeChild() {
    const mainGrid = document.getElementById('main-grid')

    while (mainGrid.childElementCount > 4) {
        mainGrid.removeChild(mainGrid.lastChild)
    }
}

function updateTvInfoComparison() {
    const lightgray = getComputedStyle(document.body).getPropertyValue('--light-gray')

    //Create the second row constaining images and price
    createOurPicksRow()

    //Create third row containing review
    createEditorRatingRow()

    //Create rest of the row with relevant data
    createSingleItemRow('Panel Type', 'panel_type', lightgray)
    createSingleItemRow('Screen size', 'screen_size')
    createSingleItemRow('Video Input', 'video_input', lightgray)
    createSingleItemRow('HDR', 'hdr')
    createSingleItemRow('HDMI Ports', 'hdmi', lightgray)
    createSingleItemRow('Streaming services', 'streaming')
    createSingleItemRow('Screen Brightness', 'brightness', lightgray)
    createSingleItemRow('Black level', 'black_level')
}

function createOurPicksRow() {
    
    const lightgray=getComputedStyle(document.body).getPropertyValue('--light-gray')
    
    createTopicRow("", lightgray)

    createTVInfo(tv1)
    createTVInfo(tv2)
    if (numberOfColumn === 3) {
        createTVInfo(tv3)
    }
    
}

function createTVInfo(tv) {
    const tvInfoDiv = document.createElement('div')
    tvInfoDiv.style.display = 'flex'
    tvInfoDiv.style.flexDirection = 'column'
    tvInfoDiv.style.alignItems = 'center'
    tvInfoDiv.style.paddingTop='8px'
    tvInfoDiv.style.backgroundColor=getComputedStyle(document.body).getPropertyValue('--light-gray')

    const tvImage = document.createElement('img')
    tvImage.setAttribute('src', pathToImage + tv.image)
    tvImage.setAttribute('alt', tv.name)
    tvImage.classList.add('compareTvImage')
    
    const tvName = document.createElement('p')
    tvName.innerHTML = tv.name

    const button = document.createElement('button')
    button.classList.add('btn-primary')
    button.classList.add('small')

    const innnerLink = document.createElement('a')
    innnerLink.setAttribute('href', amazonURL)
    innnerLink.style.color='white'
    innnerLink.style.textDecoration='none'
    innnerLink.innerHTML='See it'
    
    button.appendChild(innnerLink)

    const priceText = document.createElement('p')
    priceText.innerHTML = '$' + tv.price + ' at ' + tv.store

    tvInfoDiv.appendChild(tvImage)
    tvInfoDiv.appendChild(tvName)
    tvInfoDiv.appendChild(button)
    tvInfoDiv.appendChild(priceText)

    
    mainGrid.appendChild(tvInfoDiv)

}

function createEditorRatingRow() {
    createTopicRow("Editors' Rating")

    createRating(tv1)
    createRating(tv2)
    if (numberOfColumn === 3) {
        createRating(tv3)
    }
}

function createRating(tv) {
    const ratingDiv = document.createElement('div')
    ratingDiv.style.display = 'flex'
    ratingDiv.style.flexDirection = 'column'
    ratingDiv.style.alignItems = 'center'

    const editorChoice = document.createElement('p')
    editorChoice.innerHTML = 'Editors\' Choice'
    editorChoice.style.color = getComputedStyle(document.body).getPropertyValue('--color-primary')
    editorChoice.style.fontSize = '20px'

    const starDiv = document.createElement('div')
    starDiv.style.color = getComputedStyle(document.body).getPropertyValue('--color-primary')

    //creates filled or hollow star based on the rating of tv
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i')
        star.classList.add('fa-star')
        if (i <= tv.review) {
            star.classList.add('fa-solid')
        } else {
            star.classList.add('fa-regular')
        }
        starDiv.appendChild(star)
    }

    const span = document.createElement('span')
    span.textContent = tv.review
    span.style.fontSize = '1.3em'
    span.style.marginLeft = '8px'
    starDiv.appendChild(span)

    const editorReview = document.createElement('a')
    editorReview.textContent='Editor Review'
    editorReview.style.padding='16px'
    editorReview.setAttribute('href', './tv_review.html')

    ratingDiv.appendChild(editorChoice)
    ratingDiv.appendChild(starDiv)
    ratingDiv.appendChild(editorReview)

    mainGrid.appendChild(ratingDiv)
}

function createSingleItemRow(topic, data, color) {
    createTopicRow(topic, color)

    const div1 = document.createElement('div')
    div1.style.display='flex'
    div1.style.justifyContent='center'
    div1.style.alignItems='center'

    const item1 = document.createElement('p')
    item1.textContent=tv1[data]

    
    const div2 = document.createElement('div')
    div2.style.display='flex'
    div2.style.justifyContent='center'
    div2.style.alignItems='center'

    const item2 = document.createElement('p')
    item2.textContent=tv2[data]

    const div3 = document.createElement('div')
    div3.style.display='flex'
    div3.style.justifyContent='center'
    div3.style.alignItems='center'

    const item3 = document.createElement('p')
    item3.textContent=tv3[data]

    div1.appendChild(item1)
    div2.appendChild(item2)
    div3.appendChild(item3)
    
    
    item3.style.alignSelf = 'center'
    item3.style.justifySelf = 'center'

    if (color) {
        div1.style.backgroundColor=color
        div2.style.backgroundColor=color
        div3.style.backgroundColor=color
    }

    mainGrid.appendChild(div1)
    mainGrid.appendChild(div2)
    if (numberOfColumn === 3) {
        mainGrid.appendChild(div3)
    }
}

function createTopicRow(topic, color) {
    const titleDiv = document.createElement('div')

    titleDiv.style.width='100%'
    titleDiv.style.height='100%'
    titleDiv.style.display='flex'
    titleDiv.style.justifyContent='center'
    titleDiv.style.alignItems='center'
    if (color) {
        titleDiv.style.backgroundColor=color
    }

    const rowTitle = document.createElement('p')  
    rowTitle.innerHTML = topic 
    rowTitle.style.fontWeight='bold'
    rowTitle.style.padding = '16px'
    rowTitle.style.textAlign='center'

    titleDiv.appendChild(rowTitle)

    if (showTopicInfo) {
        mainGrid.appendChild(titleDiv)
    }
    
}