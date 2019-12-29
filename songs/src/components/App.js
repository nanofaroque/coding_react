import React from 'react'
import Profile from '../profile.jpg';
import SongList from "./SongList";

class App extends React.Component {
    render() {
        return (<div>
           {/* <img src={Profile} width="100%" height="100%" alt={null}/>
            <h1> Hello World</h1>*/}
           <SongList/>
        </div>);
    }
}

export default App;
