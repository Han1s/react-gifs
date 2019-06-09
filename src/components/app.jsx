import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="left-scene" />
//         <div className="right-scene" />
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selected_gif_id: "kiBcwEXegBTACmVOnE"
    };

    this.search("dog");
  }

  search = (query) => {
    giphy('V2m7ItECkSyrsA5lpSj2GGXEZDYawvTA').search({
      q: `${query}`,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selected_gif_id} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs}></GifList>
      </div>
    </div>
    );
  }
}

export default App;
