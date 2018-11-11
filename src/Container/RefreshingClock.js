import { connect } from "react-redux";
import { Clock } from "../Components/Clock";


const mapStateToProps = state => ({
    time: state.currentTime
})

export const RefreshingClock = connect(mapStateToProps)(Clock)