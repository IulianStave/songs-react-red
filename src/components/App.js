import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
// redux handles the configuration for child components
// no need to pass values for props  
  return (
    <div className="ui containter grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
