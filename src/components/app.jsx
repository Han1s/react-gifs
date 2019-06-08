import React from 'react';
import SearchBar from './search_bar';
import Gif from './gif';

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
          <Gif />
        </div>
      </div>
      <div className="right-scene" />
    </div>
  );
};

export default App;
