import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Promise } from 'bluebird';
import AllAlbums from './AllAlbums';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class SingleArtist extends Component {
  constructor(props) {
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
      .then(res => {
        return res.map(r => {
          return r.data;
        })
      })
      .spread((artistAlbums, artist, artistSongs) => {
        this.setState({ artist, artistAlbums, artistSongs });
      });
  }

  render() {

    const artist = this.state.artist; // or however you've named it
    const albumLink = `/artists/${artist.id}/albums`;
    const songLink = `/artists/${artist.id}/songs`
    return (
      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><NavLink to={albumLink} activeClassName="wow">ALBUMS</NavLink></li>
          <li><NavLink to={songLink} activeClassName="wow">SONGS</NavLink></li>
        </ul>
        <Route 
          path = "/artists/:artistId/albums"
          render={() => <AllAlbums albums={this.state.artistAlbums}/>}
        />
        <Route 
          path = "/artists/:artistId/songs"
          render={() => <Songs songs={this.state.artistSongs} audioProps={this.props.audioProps}/>}
        />
      </div>
    );
  }
}