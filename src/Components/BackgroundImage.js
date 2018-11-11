import React from "react";
import { styled, Grid, Link } from 'reakit'
import { loadImage, imageReady } from "../actions";

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

export const BackgroundImage = (props) => {
    if (!props.imageReady || Date.parse(props.imageData.loaded) < new Date(Date.now().valueOf() - 60000))
        props.dispatch(loadImage("landscape"))
    const gridTemplate = `
            "top top top" 15%
            "cent cent cent" 1fr
            "bottom bottom bottom" 15%
        `

    return <React.Fragment>{
        !props.imageReady ? <h1>LÄDT!</h1> : <Grid as={Background}
            url={props.imageData.imageUrl}
            template={gridTemplate} >
            <Grid.Item area="bottom"
                textShadow="0 0 2px black"
                padding="15px">
                {props.imageData.name} by <Link href={props.imageData.authorUrl} palette="white" target="_blank" fontWeight="Bold">{props.imageData.author}</Link>
            </Grid.Item>
        </Grid>
    }
    </React.Fragment>
}
