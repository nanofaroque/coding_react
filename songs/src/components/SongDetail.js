import React from "react";
import {connect} from 'react-redux'

const SongDetail = ({mySelectedSong}) => {
    if (!mySelectedSong) {
        return <div> Song Detail</div>;
    }
    return (<div>
        <h3> Details for: </h3>
        <p>
            Title: {mySelectedSong.title}
            <br />
            Duration: {mySelectedSong.duration}
        </p>
    </div>);
};
const mapStateToProps = (state) => {
    return {mySelectedSong: state.selectedsong}
};
export default connect(mapStateToProps)(SongDetail);