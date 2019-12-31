import React from 'react'
import Profile from '../profile.jpg';
import SongList from "./SongList";
import SongDetail from "./SongDetail";


class App extends React.Component {
    render() {
        return (<div className="ui container grid">
            <div className="ui row">
                <div className={"column eight wide"}>
                    <SongList/>
                </div>
                <div className={"column eight wide"}>
                    <SongDetail/>
                </div>
            </div>
           {/* <img src={Profile} width="100%" height="100%" alt={null}/>
            <h1> Hello World</h1>*/}
        </div>);
    }
}
export default App;
