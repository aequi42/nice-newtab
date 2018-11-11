import React from "react";
import { Grid, Image, Flex, Link } from "reakit";



export const SiteDisplay = ({ sites }) => {
    return <Grid columns="repeat(7, 1fr)" gridGap="15px">
        {sites.map(site =>
            <Grid.Item>
                <Grid columns="1fr" rows="80% auto" borderRadius="5px" background="#333" overflow="hidden" width="100%" height="100%">
                    <Grid.Item as={Flex} placeContent="center" placeItems="center">
                        <Flex width="75%" height="75%" placeContent="center" placeItems="center">
                            <Image src={site.favicon} maxWidth="100%" maxHeight="100%" />
                        </Flex>
                    </Grid.Item>
                    <Grid.Item fontSize="11px" as={Flex} placeContent="center" placeItems="center">
                        <Link href={site.url}>{site.url.replace(/https?:\/\//ig, '').replace(/www\./ig, '').split('/')[0]}</Link>
                    </Grid.Item>
                </Grid>
            </Grid.Item>
        )}</Grid>
}