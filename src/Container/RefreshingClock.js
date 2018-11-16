import React from "react"
import { connect } from "react-redux";
import { Clock } from "../Components/Clock";
import { startTimer, stopTimer } from "../actions";

const mapStateToProps = state => ({
    time: state.currentTime
})

class AsyncClock extends React.Component {
    componentDidMount() {
        this.props.dispatch(startTimer())
    }
    componentWillUnmount() {
        this.props.dispatch(stopTimer())
    }
    render() {
        return <Clock time={this.props.time} />
    }
}

export const RefreshingClock = connect(mapStateToProps)(AsyncClock)