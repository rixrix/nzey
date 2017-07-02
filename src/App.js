import './App.css';

import React, { Component } from 'react';
import { Header, Footer } from './Home';
import { FeedList } from './FeedList';

class App extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                    <FeedList />
                <Footer />
            </div>
        );
  }
}

export default App;
