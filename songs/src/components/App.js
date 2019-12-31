import React from 'react'
import Profile from '../profile.jpg';
import SongList from "./SongList";

class App extends React.Component {
    render() {
        return (<div className="ui container grid">
            <div className="ui row">
                <div className={"column eight wide"}>
                    <SongList/>
                </div>
            </div>
           {/* <img src={Profile} width="100%" height="100%" alt={null}/>
            <h1> Hello World</h1>*/}
        </div>);
    }
}
export default App;
