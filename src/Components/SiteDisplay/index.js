import React from "react";
import { Grid, Image, Flex, styled, Box } from "reakit";
import { TrashIconWithHover } from "./TrashIcon";
const openLink = (url) => {

    window.location.href = url;
}

const keyboardHandler = (url, removeLink, event) => {
    if (event.key === "Enter")
        openLink(url)
    if (event.key === "Delete")
        removeLink(url)
    else return;
}

const FocusableTheme = styled.div`
&:focus {
    outline: none;
    box-shadow: white 0px 0px 8px, black 0 0 8px
}`

const SiteCard = ({ site, tabIndex, removeLink, className }) => <Grid.Item className={className}>
    <Grid as={FocusableTheme} onKeyDown={keyboardHandler.bind(this, site.url, removeLink)} onClick={openLink.bind(this, site.url)} tabIndex={tabIndex} columns="1fr" rows="80% auto" borderRadius="5px" background="#333" overflow="hidden" width="100%" height="100%">
        <Grid.Item as={Flex} relative placeContent="center" placeItems="center">
            <Box absolute top={0} right={0} width={25} onClick={(evt) => { evt.stopPropagation(); removeLink(site.url) }}>
                <TrashIconWithHover />
            </Box>
            <Flex width="75%" height="75%" placeContent="center" placeItems="center">
                <Image src={site.favicon} maxWidth="100%" maxHeight="100%" />
            </Flex>
        </Grid.Item>
        <Grid.Item fontSize="11px" as={Flex} placeContent="center" placeItems="center">
            {site.url && site.url.replace(/https?:\/\//ig, '').replace(/www\./ig, '').split('/')[0]}
        </Grid.Item>
    </Grid>
</Grid.Item >

const StyledSiteCard = styled(SiteCard)`
    ${TrashIconWithHover}{
        visibility: hidden;
    }
    &:hover ${TrashIconWithHover}{
        visibility: visible;
    }
`

export const SiteDisplay = ({ sites, tabIndexOffset, removeLink }) => {
    tabIndexOffset = tabIndexOffset || 1
    return <Grid columns="repeat(7, 1fr)" gridGap="15px">
        {sites.map((site, idx) =>
            <StyledSiteCard site={site} tabIndex={idx + tabIndexOffset} removeLink={removeLink} />
        )}</Grid>
}