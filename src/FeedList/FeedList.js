import * as rss from 'rss-parser';
import React, { Component } from 'react';
import  { FeedItem } from '.';

class FeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rssFeeds: []
        };
    }

    fetchRssFeed() {
        return new Promise((resolve, reject) => {
            rss.parseURL('https://rss.msn.com/en-nz/', (error, response) => {
                if (error) reject(error);
                resolve(response);
            });
        });
    }

    componentDidMount() {
        this.fetchRssFeed()
        .then((response) => {
            this.setState({ rssFeeds: response.feed.entries});
        })
        .catch((error) => {
            console.log('[ERROR]', error);
        })
    }

    render() {
        return (
            <div className="mdl-layout__content">
                <div className="App-news-list">
                    <div className="mdl-grid">
                        {
                            this.state.rssFeeds.map((item, index) => {
                                return <FeedItem key={index} feed={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedList;
