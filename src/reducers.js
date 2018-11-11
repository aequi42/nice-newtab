import { ActionTypes } from "./actions";

    const startPage = (state, action) => {
    console.log(state)
    if (!state) {
        state = {
            category: "landscape",
            image: null,
            imageReady: false
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
        default:
            return state;
    }
}

export default startPage;