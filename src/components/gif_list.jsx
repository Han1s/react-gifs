import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const gifs = this.props.gifs;
    return (
      <div className="gif-list">
        {
        gifs.map((gif) => {
            return <Gif id={gif.id} key={gif.id} setGifFunction={this.props.setGifFunction}></Gif>;
          })
        }
      </div>
    )
  }
}

export default GifList;
