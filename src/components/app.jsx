import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "d0FRztOVKJaTYKtT4N"
    }

  }

  search = (query) => {
    // TODO API CALL
    giphy('lE1w7yaGMW6SMkjzl3RJmdAyjXIUVuxx').search({
      q: 'query',
      rating: 'g',
      limit: 18
    }, (error, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  render() {
    const gifs = [
      { id: 'd0FRztOVKJaTYKtT4N' },
      { id: '4u21pqNJkRYaFZP8V5' },
      { id: 'MBfzPHFTuFQnyQFRcc' },
      { id: 'iGG7s18lXuclk7cgQQ' },
      { id: 'eIUzaruNcTEDN4R662' },
      { id: 'COx8cF16Qyge5KvLU8' },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction ={ this.search } />
          <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
  }
}

export default App;
