import React from "react";
import { Box, Block } from "reakit";
import moment from "moment";


export const Clock = ({time})=> <Box textShadow="0 0 4px black" textAlign="right" width="100%" height="100%">
            <Block fontSize="3em">{moment(time).format("HH:mm:SS")}</Block>
            <Block fontSize="2em">{moment(time).format("DD. MMMM")}</Block>
        </Box>
