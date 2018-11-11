import React from "react";
import { Grid } from "reakit";
import { Clock } from "./Clock";
import { RefreshingClock } from "../Container/RefreshingClock";
import { TopSites } from "../Container/TopSites";


export const Layout = (props) => {
    return <Grid position="fixed" left={0} top={0} right={0} bottom={0} template={`
    ". . clock" 1fr
    ". topSites topSites" 1fr
    "lowerl lowerc lowerr" 1fr
    "bottoml bottomc bottomr" 1fr
    / 1fr 1fr 1fr
`}>
        <Grid.Item area="clock">
            <RefreshingClock />
        </Grid.Item>


        <Grid.Item area="topSites" >
            <TopSites />
        </Grid.Item>

        <Grid.Item area="lowerl" />
        <Grid.Item area="lowerc" />
        <Grid.Item area="lowerr" />

        <Grid.Item area="bottoml" />
        <Grid.Item area="bottomc" />
        <Grid.Item area="bottomr" />
    </Grid>
}