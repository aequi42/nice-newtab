import React from "react";
import { Grid } from "reakit";
import { Clock } from "./Clock";
import { RefreshingClock } from "../Container/RefreshingClock";


export const Layout = (props) => <Grid position="fixed" left={0} top={0} right={0} bottom={0} template={`
    "topl topc topr" 1fr
    "upperl upperc upperr" 1fr
    "lowerl lowerc lowerr" 1fr
    "bottoml bottomc bottomr" 1fr
    / auto auto auto
`}>
    <Grid.Item area="topl" />
    <Grid.Item area="topc" />
    <Grid.Item area="topr">
        <RefreshingClock />
    </Grid.Item>

    <Grid.Item area="upperl" />
    <Grid.Item area="upperc" />
    <Grid.Item area="upperr" />

    <Grid.Item area="lowerl" />
    <Grid.Item area="lowerc" />
    <Grid.Item area="lowerr" />

    <Grid.Item area="bottoml" />
    <Grid.Item area="bottomc" />
    <Grid.Item area="bottomr" />
</Grid>