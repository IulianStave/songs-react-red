import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }

};

// state object = all the data inside our store
// getMyState function called mapStateToProps = (state)
const mapStateToProps = (state) => {
  // console.log(state);

  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);