import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import {Promise} from 'bluebird';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
  constructor(props){
    super(props);
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }
  componentDidMount() {
    console.log(this.props.match.params)
    Promise.all(
        [
            axios.get(`/api/artists/${this.props.match.params.artistId}/albums`),
            axios.get(`/api/artists/${this.props.match.params.artistId}`),
            axios.get(`/api/artists/${this.props.match.params.artistId}/songs`),
        ])
      .then( res   => {
          return res.map(r => {
              return r.data;
          })
      })
      .spread((artistAlbums, artist, artistSongs) => {
        this.setState({ artist, artistAlbums, artistSongs });
      });
  }

  render () {
    // console.log(this.props.match.params);
    const artist = this.state.artist;
    const artistSongs = this.state.artistSongs
    return (
      <div className="artist">
        <div>
          <h3>{ artist.name }</h3>
          <h4> ALBUMS </h4>
          <AllAlbums albums={this.state.artistAlbums}/>
          <h4> SONGS </h4>
        </div>
        <Songs songs={artistSongs} />
      </div>
    );
  }
}