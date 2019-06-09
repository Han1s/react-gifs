import React from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

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

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="kiBcwEXegBTACmVOnE"/>
        </div>
      </div>
      <div className="right-scene">
        <GifList></GifList>
      </div>
    </div>
  );
};

export default App;
