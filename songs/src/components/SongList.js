import React from "react";
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return <div className="item" key={song.title}>
                <div className="left floated content">{song.title}</div>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                    >
                        Select
                    </button>
                </div>
            </div>;
        })
    }

    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// get the state from redux store
// and pass as props to our component
const mapStateToProps = (state) => {
    return {songs: state.songs};
};
// since we will be using action creator to create action for select song
// we need to connect that with our component
export default connect(
    mapStateToProps,
    {selectSong: selectSong} // this is where the dispatch event is happening
)(SongList);