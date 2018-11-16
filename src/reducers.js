import { ActionTypes } from "./actions";

const startPage = (state, action) => {
    if (!state) {
        state = {
            category: "landscape",
            image: null,
            imageReady: false,
            currentTime: new Date(),
            topSitesToDisplay: []
        }
    }
    let returnObject = { ...state }
    switch (action.type) {
        case ActionTypes.loadImage:
            returnObject.imageReady = false
            break
        case ActionTypes.imageReady:
            returnObject.image = action.data
            returnObject.imageReady = true
            break
        case ActionTypes.timerTick:
            returnObject.currentTime = new Date()
            break
        default: break
    }
    returnObject.topSitesToDisplay = topSites(state.topSitesToDisplay, action)
    return returnObject
}

const topSites = (state = [], action) => {
    let stateToReturn = [...state]
    switch (action.type) {
        case ActionTypes.setTopSites:
            stateToReturn.push(action.sites)
            break
        case ActionTypes.removeTopSite:
            stateToReturn.push(state[state.length - 1].filter(site => site.url !== action.site))
            break
        default: break
    }
    return stateToReturn
}

export default startPage