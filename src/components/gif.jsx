import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.webp?cid=790b76115cfbfe3631727139554b0374&rid=200w.webp`;
    return (
      <img src={src} className="gif" />
    );
  }
}

export default Gif;
