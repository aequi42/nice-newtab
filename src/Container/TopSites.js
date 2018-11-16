import React from "react"
import { connect } from "react-redux";
import { SiteDisplay } from "../Components/SiteDisplay";
import { loadTopSites, removeTopSite } from "../actions";

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

const mapDispatchToProps = dispatch => ({
    removeLink: url => dispatch(removeTopSite(url)),
    loadTopSites: () => dispatch(loadTopSites())
})

class AsyncTopSites extends React.Component {
    componentDidMount() {
        this.props.loadTopSites()
    }
    render() {
        return <SiteDisplay {...this.props}/>
    }
}

export const TopSites = connect(mapStateToProps, mapDispatchToProps)(AsyncTopSites)