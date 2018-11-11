import { connect } from "react-redux";
import { BackgroundImage } from "../Components/BackgroundImage";

const getBackgroundImage = (images) => {
    return images;
}

const mapStateToProps = state => ({
    imageData: getBackgroundImage(state.image),
    imageReady: state.imageReady
})

export const PopulatedBackgroundImage = connect(mapStateToProps)(BackgroundImage)