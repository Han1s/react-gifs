import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const gifs = ["kiBcwEXegBTACmVOnE", "4Zo41lhzKt6iZ8xff9", "bbshzgyFQDqPHXBo4c"];
    return (
      <div className="gif-list">
        {
        gifs.map((id) => {
            return <Gif id={id} key={id}></Gif>;
          })
        }
      </div>
    )
  }
}

export default GifList;
