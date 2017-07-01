import React, { Component } from 'react';
import { Header, Footer } from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <div className="mdl-layout__content">
          <div className="App-news-list">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Title</h5>
                  excerpt
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
