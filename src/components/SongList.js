import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.tytle}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }
  
  
  render() {
    console.log(this.props);
    return <div class="ui divided list">{this.renderList()}</div>;
  }

};

// state object = all the data inside our store
// getMyState function called mapStateToProps = (state)
const mapStateToProps = (state) => {
  // console.log(state);
  //  the this.props === {songs: state.songs }
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);