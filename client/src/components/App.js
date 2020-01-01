import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const pageA = () => {
    return <div>Page A</div>
};

const pageB = () => {
    return <div>Page B</div>
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={pageA}></Route>
                <Route path="/pageb" exact component={pageB}></Route>
            </BrowserRouter>
        </div>
    );
}
export default App;
