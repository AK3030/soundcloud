import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import ReactPlayer from 'react-player';

class UserTrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    };
  }

  load() {
    return (url) => {
      this.setState({
        url,
        played: 0,
        loaded: 0
    });
  };
  }

  playPause() {
    return () => {
      this.setState({playing: !this.state.playing});
    };
  }

  onProgress() {

    return (state) => {

      this.setState(state);

    };
  }

  componentDidMount() {

    // if (this.props.alltracks){
    //   this.props.fetchUser(this.props.track.user_id);
    // }

  }

  render() {
    console.log(this.props);
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;
    // var playButtonBackground ='url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsYXkgMjg8L3RpdGxlPjxwYXRoIGQ9Ik0wIDE0bDEuODQ2LTdMMCAwbDggNy04IDd6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)';
    // if (playing) {
    //   playButtonBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)';
    // }
    var pauseStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)',
      backgroundSize: '35%',
      backgroundPositionX: '12px',
      backgroundPositionY: '8px',

    };

    var playStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsYXkgMjg8L3RpdGxlPjxwYXRoIGQ9Ik0wIDE0bDEuODQ2LTdMMCAwbDggNy04IDd6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)',
      backgroundSize: '35%',
      backgroundPositionX: '12.5px',
      backgroundPositionY: '7px',
    };
    var playButtonStyle = playStyle;
    if (playing) {
      playButtonStyle = pauseStyle;
    }



    var editTrackButton = null;
    if (this.props.currentUser) {
      var editLink =`/#/users/${this.props.track.user_id}/tracks/${this.props.track.id}/edit`;
      editTrackButton = (this.props.currentUser.id == this.props.track.user_id) ? <a href={editLink}><div className="edit-track-item">Edit</div></a> : null;
    }
    var artistLink = `#/users/${this.props.trackartist.id}`;
    return (
    <li className="track-index-item">
      <img className="track-item-image" src={linkCleaner(this.props.track.image)}></img>
      <div className="item-middle">
        <div className="item-upper-div">
          <div style={playButtonStyle} className="play-button" onClick={this.playPause()}>{playing ? '' : ''}</div>
          <div className="track-info-div">
            <div className="track-artist"><a href={artistLink}> {this.props.trackartist.username} </a></div>
            <div className="track-name">{this.props.track.track_name}</div>

            <ReactPlayer
              playing={playing}
              onProgress={this.onProgress()}
              height="0px"
              className="react-player"
              url={linkCleaner(this.props.track.audio)}/>
          </div>

        </div>
      <div className="track-item-buttons">
        {editTrackButton}
      </div>
      </div>




    </li>

  );
  }
}

export default UserTrackIndexItem;