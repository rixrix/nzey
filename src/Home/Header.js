import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="App-header mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">
                    <img className="App-logo" src="images/logo.png" alt="NZ,ey!"/>
                </span>
            </div>
        </div>
        );
    }
}

export default Header;
