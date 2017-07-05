import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {}
    }
  }
  componentDidMount() {
    console.log(this.props.match.params)
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(res => res.data)
      .then(album => {
        this.setState({ album })
      });
  }

  render () {
    console.log(this.props.match.params);
    const album = this.state.album;
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
