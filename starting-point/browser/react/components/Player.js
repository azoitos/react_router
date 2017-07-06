import React from 'react';
const Player = (props) => {
  console.log(props.audioProps);
  return (
    <footer>
      <div>
        <div className="pull-left">
          <button onClick={props.audioProps.prev} className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward"></span>
          </button>
          {!props.audioProps.isPlaying ?
          <button onClick={props.audioProps.toggle} className="btn btn-default">
            <span className="glyphicon glyphicon-play"></span>
          </button> :
          <button onClick={props.audioProps.toggle} className="btn btn-default">
            <span className="glyphicon glyphicon-pause"></span>
          </button>
          }
          <button onClick={props.audioProps.next} className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward"></span>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" style={{width: `${props.audioProps.progress * 100}%`}} ></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Player;
