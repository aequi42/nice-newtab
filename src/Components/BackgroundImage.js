import React from "react";
import { styled, Link, Box } from 'reakit'
import { loadImage } from "../actions";

const Background = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`
export const BackgroundTitle = (props) => <Box textShadow="0 0 2px black">
    {props.imageData.name} by <Link href={props.imageData.authorUrl} palette="white" target="_blank" fontWeight="Bold">{props.imageData.author}</Link>
</Box>

export const BackgroundImage = (props) => {
    if (!props.imageReady || Date.parse(props.imageData.loaded) < new Date(Date.now().valueOf() - 60000))
        props.dispatch(loadImage("landscape"))

    return <React.Fragment>{
        !props.imageReady ? <h1>LÄDT!</h1> : <Background url={props.imageData.imageUrl} />
    }
    </React.Fragment>
}
