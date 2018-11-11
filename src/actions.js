export const ActionTypes = {
    loadImage: "LOAD_IMAGE",
    imageReady: "IMAGE_READY"
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