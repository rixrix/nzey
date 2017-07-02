import React, { Component } from 'react';

class FeedItem extends Component {
    render() {
        return (
            <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <h5><a target="_blank" href={this.props.feed.link}>{this.props.feed.title}</a></h5>
                {this.props.feed.contentSnippet}
            </div>
        );
    }
}

export default FeedItem;
