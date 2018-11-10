import React from "react";
import { styled, Grid, Link } from 'reakit'

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

export class BackgroundImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            author: "",
            authorUrl: "",
            name: ""
        }
    }
    async componentDidMount() {
        let imageData = JSON.parse(window.localStorage.getItem("imageData"))
        if (!imageData) {

            let request = await fetch("https://api.unsplash.com/photos/random?query=landscape", {
                headers: {
                    "Authorization": "Client-ID 5415f3cd0b35755d0846213e10ab48afa94065c53adb65191e236caed5fbca51"
                }
            })
            let jsonResult = await request.json();
            imageData = {
                imageUrl: jsonResult.urls.regular,
                author: jsonResult.user.name,
                authorUrl: jsonResult.user.links.html,
                name: jsonResult.description
            }

            window.localStorage.setItem("imageData", JSON.stringify(imageData));
        }
        this.setState(imageData);
    }
    render() {
        const gridTemplate = `
            "top top top" 15%
            "cent cent cent" 1fr
            "bottom bottom bottom" 15%
        `

        return <Grid as={Background}
            url={this.state.imageUrl}
            template={gridTemplate} >
            <Grid.Item area="bottom"
                textShadow="0 0 2px black"
                padding="15px">
                {this.state.name} by <Link href={this.state.authorUrl} palette="white" target="_blank" fontWeight="Bold">{this.state.author}</Link>
            </Grid.Item>
        </Grid>

    }
}