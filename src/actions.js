import { START_TIMER, STOP_TIMER } from 'redux-timer';

export const ActionTypes = {
    loadImage: "LOAD_IMAGE",
    imageReady: "IMAGE_READY",
    timerTick: "TIMER_TICK",
    removeTopSite: "REMOVE_TOP_SITE",
    setTopSites: "SET_TOP_SITES"
}

export const loadImage = (category) => dispatch => {

    fetch(`https://api.unsplash.com/photos/random?query=${category}`, {
        headers: {
            "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
        }
    })
        .then(res => res.json())
        .then(
            json => dispatch(imageReady({
                imageUrl: json.urls.regular,
                author: json.user.name,
                authorUrl: json.user.links.html,
                name: json.description,
                loaded: new Date()
            }))
        )
}

export const imageReady = (imageData) => ({
    type: ActionTypes.imageReady,
    data: imageData
})

export const startTimer = () => ({
    type: START_TIMER,
    payload: {
        name: 'exampleTimer',
        action: ActionTypes.timerTick,
        interval: 1000,
        runImmediately: true
    }
})

export const stopTimer = () => ({
    type: STOP_TIMER,
    payload: {
        name: 'exampleTimer'
    }
})

export const removeTopSite = (siteToRemove) => ({
    type: ActionTypes.removeTopSite,
    site: siteToRemove
})

export const setTopSites = (topSites) => ({
    type: ActionTypes.setTopSites,
    sites: topSites
})

export const loadTopSites = () => (dispatch, getState) => {
    const currentSites = getState().topSitesToDisplay
    if (!currentSites.length)
       window.browser.topSites.get({ includeFavicon: true, limit: 12 })
            .then(sites => dispatch(setTopSites(sites)))
}
