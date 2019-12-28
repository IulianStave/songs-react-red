// Reducers
// A static list of songs songsReducer

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '3:22'},
    { title: 'Abba', duration: '4:00'},
    { title: 'Queen', duration: '3:43'}
  ];
};


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  
  return selectedSong;
};