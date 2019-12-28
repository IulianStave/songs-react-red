import React from 'react';
// import actions from '../actions';
// if is named import use {} 
import {selectSong} from '../actions';
import SongList from './SongList';

const App = () => {
  
  return (
    <div>
      <SongList />
    </div>
  );
}

export default App;
