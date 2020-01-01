import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>Page A</div>
};

const PageTwo = () => {
    return <div>
        Page B
        <button>Click Here</button>
    </div>
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={PageOne}></Route>
                <Route path="/pagetwo" component={PageTwo}></Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
