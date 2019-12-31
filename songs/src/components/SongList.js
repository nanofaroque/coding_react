import React from "react";
import {connect} from 'react-redux'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return <div className="item" key={song.title}>
                <div className="left floated content">{song.title}</div>
                <div className="right floated content">
                    <button className="ui button primary">
                        Select
                    </button>
                </div>

            </div>;
        })
    }

    render() {
        //console.log(this.props.songs);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// get the state from redux store
// and pass as props to our component
const mapStateToProps = (state) => {
    return {songs: state.songs};
};
export default connect(mapStateToProps)(SongList);