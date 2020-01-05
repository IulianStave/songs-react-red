import React from 'react';
// import actions from '../actions';
// if is named import use {} 
// import {selectSong} from '../actions';
import SongList from './SongList';

const App = () => {
  
  return (
    <div className="ui containter grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
