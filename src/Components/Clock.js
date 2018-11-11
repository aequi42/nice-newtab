import React from "react";
import { Box } from "reakit";
import { startTimer, stopTimer } from "../actions";

export class Clock extends React.Component {
    componentDidMount() {
        this.props.dispatch(startTimer())
    }
    componentWillUnmount() {
        this.props.dispatch(stopTimer())
    }
    render() {
        return <Box fontSize="3em" textShadow="0 0 4px black" padding={20} textAlign="right" width="100%" height="100%">{this.props.time.toLocaleTimeString()}</Box>
    }
}