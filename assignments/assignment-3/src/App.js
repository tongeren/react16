import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CoursePage from './containers/CoursePage';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="App">
                    <CoursePage />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
