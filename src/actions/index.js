// Action creator
// place 'export' keyword in front of const selectSong 
// to allow a named import inside App.js
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
