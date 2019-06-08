import React from 'react';
import SearchBar from './search_bar';

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
      </div>
      <div className="right-scene" />
    </div>
  );
};

export default App;
