import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const gifs = ["kiBcwEXegBTACmVOnE", "4Zo41lhzKt6iZ8xff9", "bbshzgyFQDqPHXBo4c"];
    return (
      <div className="gif-list">
        <Gif id="kiBcwEXegBTACmVOnE"></Gif>
        <Gif id="4Zo41lhzKt6iZ8xff9"></Gif>
        <Gif id="bbshzgyFQDqPHXBo4c"></Gif>
      </div>
    )
  }
}

export default GifList;
