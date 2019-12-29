import React from "react";
import {connect} from 'react-redux'

class SongList extends React.Component{
    render() {
        console.log(this.props);
        return <div> SongList</div>;
    }
}

// get the state from redux store
// and pass as props to our component
const mapStateToProps=(state)=>{

    return { songs:state.songs};
}
export default connect(mapStateToProps)(SongList);