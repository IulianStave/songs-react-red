import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log(props);
  if (!props.mySong) {
    return <div>Select a song</div>
  }
  else {
    return <div>SongDetail</div>;
  }
  
};

// wrap the SongDetail with the connect component so that
// we get information from the redux store
// we take selectedSong from the reducers combineReducers
const mapStateToProps = (state) => {
  return {mySong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);