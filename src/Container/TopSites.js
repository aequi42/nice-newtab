import React from "react"
import { connect } from "react-redux";
import { SiteDisplay } from "../Components/SiteDisplay";
import { loadTopSites } from "../actions";

const getTopSites = (sites) => {
    const lastTopSites = sites && sites[sites.length - 1]
    if (!lastTopSites)
        return []
    const topSitesToDisplay = lastTopSites.slice(0, 7)
    return topSitesToDisplay;
}

const mapStateToProps = state => ({
    sites: getTopSites(state.topSitesToDisplay)
})

class AsyncTopSites extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadTopSites())
    }
    render() {
        return <SiteDisplay sites={this.props.sites} />
    }
}

export const TopSites = connect(mapStateToProps)(AsyncTopSites)