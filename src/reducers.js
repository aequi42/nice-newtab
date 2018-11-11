import { ActionTypes } from "./actions";

const startPage = (state, action) => {
    console.log(state)
    if (!state) {
        state = {
            category: "landscape",
            image: null,
            imageReady: false,
            currentTime: new Date()
        }
    }
    switch (action.type) {
        case ActionTypes.loadImage:
            return {
                ...state,
                imageReady: false
            };
        case ActionTypes.imageReady:
            return {
                ...state,
                image: action.data,
                imageReady: true
            }
        case ActionTypes.timerTick:
            return {
                ...state,
                currentTime: new Date()
            }
        default:
            return { ...state };
    }
}

export default startPage;