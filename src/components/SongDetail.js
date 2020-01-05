import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  // instead of props.mySong we could use mySong directly 
  // if we define the component as 
  // const SongDetail = ({mySong}) => {}
  if (!props.mySong) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <h4>
        Title: {props.mySong.title}
      </h4>
      <p>
        Duration: {props.mySong.duration}
      </p>
    </div>
  );
  
  
};

// wrap the SongDetail with the connect component so that
// we get information from the redux store
// we take selectedSong from the reducers combineReducers
const mapStateToProps = (state) => {
  return {mySong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);