import React from "react";
import { Box, Block } from "reakit";
import { startTimer, stopTimer } from "../actions";
import moment from "moment";


export class Clock extends React.Component {
    componentDidMount() {
        this.props.dispatch(startTimer())
    }
    componentWillUnmount() {
        this.props.dispatch(stopTimer())
    }
    render() {
        return <Box textShadow="0 0 4px black" textAlign="right" width="100%" height="100%">
            <Block fontSize="3em">{moment().format("HH:mm:SS")}</Block>
            <Block fontSize="2em">{moment(this.props.time).format("DD. MMMM")}</Block>
        </Box>
    }
}